class Api::V1::UsersController < Api::V1::ApiController
  before_action :authenticate_api_user!

  ASSOCIATIONS = [
    :ability_profile
  ]

  FILTERED_COLUMNS = [
    :ability_profile_id
  ]

  FILTERED_EXPRESSION = [
    name: "LOWER(users.name) LIKE LOWER('%?%')",
    ability_profile_name: "LOWER(ability_profiles.name) LIKE LOWER('%?%')"
  ]

  PERMITTED_PARAMS = [
    :name,
    :nackename,
    :image,
    :cpf,
    :email,
    :pass,
    :password_confirmation,
    :confirmed_at,
    :phone_number,
    :user_type,
    :language,
    :active,
    :ability_profile_id
  ]

  # POST /params
  def create
    if current_api_user.can?(ability_symbol('create'))      
      resource_ = resource_klass.new(resource_params)
      resource_.password = params[:password] if params[:password].present?
      
      render json: resource_, status: :created if resource_.save
      json_errors(resource_) if !resource_.save
      
      return
    end
    denied_access
  end

  def can
    render json: {permission: current_api_user.can?(params[:action_code])}
  end

  def permissions_all
    render json: current_api_user.ability_profile.ability_actions
  end

  def user_menu
    return render json: Menu.all if current_api_user.admin?
    render json: mount_menu_user
  end

  def reset_password
    if current_api_user.can?(:user_reset_password)
      render json: User.reset_password(param_id, params[:password], params[:password_confirmation] )

      return
    end
    denied_access
  end


  private

  def mount_menu_user
    menu = []
    Menu.all.order(:order).each do | item_menu |

      ability_actions_user = []
      # Lista as ações de um usuario de acordo com o perfil cadastrado
      ability_actions = current_api_user.ability_profile.ability_actions.where(active_menu: true)

      ability_actions.each do | ability_action |
        # Compara se a ação do usuario é igual a ação geral
        if item_menu.id == ability_action.menu.id 
          ability_actions_user.push(
                                    id: ability_action.id,
                                    name: ability_action.name, 
                                    router: ability_action.router,
                                    icon: ability_action.icon, 
                                    order: ability_action.order
                                  )
        end
      end

      menu.push(
                id: item_menu.id,
                name: item_menu.name,
                order: item_menu.order,
                icon: item_menu.icon,
                ability_actions: ability_actions_user
              )
    end
    menu
  end
end
