require "test_helper"

class AbilityProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ability_profile = ability_profiles(:one)
  end

  test "should get index" do
    get ability_profiles_url, as: :json
    assert_response :success
  end

  test "should create ability_profile" do
    assert_difference("AbilityProfile.count") do
      post ability_profiles_url, params: { ability_profile: { name: @ability_profile.name } }, as: :json
    end

    assert_response :created
  end

  test "should show ability_profile" do
    get ability_profile_url(@ability_profile), as: :json
    assert_response :success
  end

  test "should update ability_profile" do
    patch ability_profile_url(@ability_profile), params: { ability_profile: { name: @ability_profile.name } }, as: :json
    assert_response :success
  end

  test "should destroy ability_profile" do
    assert_difference("AbilityProfile.count", -1) do
      delete ability_profile_url(@ability_profile), as: :json
    end

    assert_response :no_content
  end
end
