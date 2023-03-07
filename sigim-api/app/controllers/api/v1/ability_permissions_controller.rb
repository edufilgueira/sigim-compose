class Api::V1::AbilityPermissionsController < Api::V1::ApiController
  before_action :authenticate_api_user!
  before_action :set_ability_permission, only: %i[ update ]

  def show
    codes = action_code
    
    codes.each do |index|
      index[:permissions].each do |permission|
        id = params[:id]
        code = permission[:action_code]
        bool = AbilityPermission.joins(:ability_action)
                  .where(ability_profile_id: id, ability_action: {action_code: code})
                  .present?
        permission[:checked] = bool
      end
    end
    
    render json: codes.sort_by { |item| item[:name] }
  end

  def update
    if current_api_user.can?(:ability_permission_update)
      permissions = params["data"]
      id = params[:id]

      permissions.each do |permission|

        action = AbilityAction.find_by(action_code: permission[:action_code].to_sym)
        ability_permission = AbilityPermission.find_by(ability_profile_id: id, ability_action: action)
        
        if permission[:checked]
          if !ability_permission.present?
            AbilityPermission.create(ability_profile_id: id, ability_action: action)
          end
        else
          if ability_permission.present?
            ability_permission.destroy
          end
        end
      
      end

      render json: "updated"
      return
    end

    denied_access
  end

  private

    def action_code
      actions = []
      AbilityResource.all.each do | resouce |
        permissions = []
        resouce.ability_actions.each do | action |
          permissions.push(
                            action_code: action.action_code.to_s,
                            name:  I18n.t("ability_permission.action_code.#{action.action_code.to_s}")
                          )
        end

        actions.push(
                      name: I18n.t("activerecord.models.#{resouce.name}"),
                      permissions: permissions
                    )
      end

      actions
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_ability_permission
      @ability_permission = AbilityProfile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ability_permission_params
      params.require(:ability_permission).permit(:ability_profile_id, :ability_action_id)
    end
end
