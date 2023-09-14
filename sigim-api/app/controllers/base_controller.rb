#
# Códigos de erros http utilizados para resposta
# 403 — Proibido
# 404 — Não encontrado
# 500 — Erro interno do servidor
# 503 — Serviço Indisponível
# 504 — Gateway Timeout
#
class BaseController < ApplicationController

  FIND_ACTIONS = ['show', 'edit', 'update', 'destroy']

  PERMITTED_PARAMS = []

  @status_save = true

  # GET /all
  def index
    if current_api_user.can?(ability_symbol('index'))
      instance_variable_set("@#{resources_name}", resources)
      render_action("index")
      
      return
    end
    denied_access
  end
  
  # GET /id
  def show
    if current_api_user.can?(ability_symbol('show'))
      resource = resource_klass.find(param_id)
      instance_variable_set("@#{resource_name}", resource )
      render_action("show")
      
      return
    end
    denied_access
  end

  # POST /params
  def create
    if current_api_user.can?(ability_symbol('create'))
      create_many if save_many?
      return      if save_many?

      model = resource_klass.new(resource_params)
      render json: model, status: :created if model.save
      json_errors(model) if !model.save
      
      return
    end
    denied_access
  end

  # PATCH/PUT /id
  def update
    if current_api_user.can?(ability_symbol('update'))
      update_many if save_many?
      return      if save_many?

      model = resource_klass.find(param_id)
      model.assign_attributes(resource_params)
      
      render json: model if model.save
      json_errors(model) if !model.save
      
      return
    end
    denied_access
  end

  # DELETE /id
  def destroy
    if current_api_user.can?(ability_symbol('destroy'))
      model =  resource_klass.find(param_id)
      if model.destroy
        render json: { success: 'set_success_flash_notice' }
      else
        render json: { error: 'set_error_flash_alert' }
      end
      
      return
    end
    denied_access
  rescue => e
    render json: { error: set_error_foreign_key, exception: e.to_s }, status: 403
  end

  private

  # Persistence Method

  # Adicionar lista em massa
  def create_many
    resource_ = resource_klass
    ActiveRecord::Base.transaction do
      accept_params[:_json].each do |create_new|
        resource_ = resource_klass.new(create_new)  
        @status_save = false if !resource_.save
        raise ActiveRecord::Rollback if !resource_.save
      end
    end
    render json: :sucess, status: :created if @status_save
    json_errors(resource_) if !@status_save
    return
  end

  # Atualizar lista em massa
  def update_many
    resource_ = resource_klass
    ActiveRecord::Base.transaction do
      accept_params[:_json].each do |update|
        resource_ = resources.find(update[:id])
        @status_save = false if !resource_.update(update)
        raise ActiveRecord::Rollback if !resource_.update(update)
      end
    end
    render json: :sucess, status: :created if @status_save
    json_errors(resource_) if !@status_save
    return
  end

  ## Resource access

  def resources
    resource_klass.all
  end

  def resource
    @resource = (find_action? ? find_resource : new_resource)
  end
  
  def find_resource
    resources.find(param_id)
  end
  
  def new_resource
    #resources.new(resource_params)
    resource_klass.new(resource_params)
  end

  # retorna o nome do recurso para o controller corrente
  # Ex: UsersController # => user
  def resource_name
    controller_name.singularize
  end

  # retorna o nome do recurso no plural
  # Ex: UsersController # => users
  def resources_name
    resource_name.to_s.pluralize
  end

  # resource_name como symbol usado para autorizar params, por ex.
  # Não funciona para models com namespace e deve ser sobrescrito pelo próprio
  # controller nesses casos.
  def resource_symbol
    resource_name.to_sym
  end

  # Retorna o sinbolo padrão de acesso a abilidade da funcionalidade
  def ability_symbol(ability)
    "#{resource_name}_#{ability}".to_sym
  end

  def resource_params
    if params[resource_symbol].present?
      params.require(resource_symbol).permit(self.class::PERMITTED_PARAMS)
    end
  end

  # Retorna a classe relacionada ao controller. Não funciona para models com
  # namespace e deve ser sobrescrito pelo próprio controller nesses casos.
  def resource_klass
    resource_name.camelize.constantize
  end

  def find_action?
    self.class::FIND_ACTIONS.include?(action_name)
  end

  def render_action(action)
    render(template: "api/#{$version}/#{resources_name}/#{action}", formats: :json)
  end

  # Params

  def param_id
    params[:id]
  end
  
  def save_many?
    return true if params[:many] == "true"
    false
  end

  def accept_params
    params.permit!
  end
  
  # Resources

  def resource_destroy
    resource.destroy
  end

  def resource_save
    retorno = resource.save
  end

  # Navigational methods

  def set_success_flash_notice
    #notice = t('.done', title: resource_notice_title)
  end

  def set_error_flash_alert

    flash[:alert] = t('.error', title: resource_notice_title)
  end

  def set_error_flash_now_alert
    flash.now[:alert] = t('.error', title: resource_notice_title)
  end

  def resource_notice_title
    resource.title if resource.respond_to?(:title)
  end

  def json_errors(resource)
    render json: { error: resource.errors.to_json }, status: :unprocessable_entity
  end

  def set_error_foreign_key
    I18n.t('activerecord.errors.invalid_foreign_key')
  end

end