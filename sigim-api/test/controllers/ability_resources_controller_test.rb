require "test_helper"

class AbilityResourcesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ability_resource = ability_resources(:one)
  end

  test "should get index" do
    get ability_resources_url, as: :json
    assert_response :success
  end

  test "should create ability_resource" do
    assert_difference("AbilityResource.count") do
      post ability_resources_url, params: { ability_resource: { name: @ability_resource.name } }, as: :json
    end

    assert_response :created
  end

  test "should show ability_resource" do
    get ability_resource_url(@ability_resource), as: :json
    assert_response :success
  end

  test "should update ability_resource" do
    patch ability_resource_url(@ability_resource), params: { ability_resource: { name: @ability_resource.name } }, as: :json
    assert_response :success
  end

  test "should destroy ability_resource" do
    assert_difference("AbilityResource.count", -1) do
      delete ability_resource_url(@ability_resource), as: :json
    end

    assert_response :no_content
  end
end
