require "test_helper"

class AbilityPermissionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ability_permission = ability_permissions(:one)
  end

  test "should get index" do
    get ability_permissions_url, as: :json
    assert_response :success
  end

  test "should create ability_permission" do
    assert_difference("AbilityPermission.count") do
      post ability_permissions_url, params: { ability_permission: { action_id: @ability_permission.action_id, group_id: @ability_permission.group_id } }, as: :json
    end

    assert_response :created
  end

  test "should show ability_permission" do
    get ability_permission_url(@ability_permission), as: :json
    assert_response :success
  end

  test "should update ability_permission" do
    patch ability_permission_url(@ability_permission), params: { ability_permission: { action_id: @ability_permission.action_id, group_id: @ability_permission.group_id } }, as: :json
    assert_response :success
  end

  test "should destroy ability_permission" do
    assert_difference("AbilityPermission.count", -1) do
      delete ability_permission_url(@ability_permission), as: :json
    end

    assert_response :no_content
  end
end
