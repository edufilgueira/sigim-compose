class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  prepend_before_action :set_locale
  before_action :configure_permitted_parameters, if: :devise_controller?

  def set_locale
    # Temos que garantir que se o parametro locale vier em branco (''),
    # seja carregado o locale padrão.
    I18n.locale = valid_locale? ? params[:locale] : I18n.default_locale
  end

  def denied_access
    render json: {return: I18n.t("ability_permission.access_denied")}, status: :unauthorized #401
  end


  private

  def valid_locale?
    param_locale.present? && I18n.available_locales.include?(param_locale.to_sym)
  end

  def param_locale
    params[:locale]
  end

  protected

  def configure_permitted_parameters
    #attributes = %i[name cpf email nickname image phone_number ability_profile_id confirmed_at]
    attributes = %i[]
    devise_parameter_sanitizer.permit(:account_update, keys: attributes )
    devise_parameter_sanitizer.permit(:sign_up, keys: attributes )
  end
end
