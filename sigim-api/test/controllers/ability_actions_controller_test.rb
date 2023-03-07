require "test_helper"

class AbilityActionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ability_action = ability_actions(:one)
  end

  test "should get index" do
    get ability_actions_url, as: :json
    assert_response :success
  end

  test "should create ability_action" do
    assert_difference("AbilityAction.count") do
      post ability_actions_url, params: { ability_action: { resource: @ability_action.resource, name: @ability_action.name, active_menu: @ability_action.active_menu } }, as: :json
    end

    assert_response :created
  end

  test "should show ability_action" do
    get ability_action_url(@ability_action), as: :json
    assert_response :success
  end

  test "should update ability_action" do
    patch ability_action_url(@ability_action), params: { ability_action: { ability_resource_id: @ability_action.ability_resource_id, name: @ability_action.name, active_menu: @ability_action.active_menu } }, as: :json
    assert_response :success
  end

  test "should destroy ability_action" do
    assert_difference("AbilityAction.count", -1) do
      delete ability_action_url(@ability_action), as: :json
    end

    assert_response :no_content
  end
end
