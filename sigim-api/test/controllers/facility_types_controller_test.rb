require "test_helper"

class FacilityTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @facility_type = facility_types(:one)
  end

  test "should get index" do
    get facility_types_url, as: :json
    assert_response :success
  end

  test "should create facility_type" do
    assert_difference("FacilityType.count") do
      post facility_types_url, params: { facility_type: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show facility_type" do
    get facility_type_url(@facility_type), as: :json
    assert_response :success
  end

  test "should update facility_type" do
    patch facility_type_url(@facility_type), params: { facility_type: {  } }, as: :json
    assert_response :success
  end

  test "should destroy facility_type" do
    assert_difference("FacilityType.count", -1) do
      delete facility_type_url(@facility_type), as: :json
    end

    assert_response :no_content
  end
end
