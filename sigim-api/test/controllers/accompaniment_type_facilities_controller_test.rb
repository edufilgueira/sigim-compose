require "test_helper"

class AccompanimentTypeFacilitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @accompaniment_type_facility = accompaniment_type_facilities(:one)
  end

  test "should get index" do
    get accompaniment_type_facilities_url, as: :json
    assert_response :success
  end

  test "should create accompaniment_type_facility" do
    assert_difference("AccompanimentTypeFacility.count") do
      post accompaniment_type_facilities_url, params: { accompaniment_type_facility: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show accompaniment_type_facility" do
    get accompaniment_type_facility_url(@accompaniment_type_facility), as: :json
    assert_response :success
  end

  test "should update accompaniment_type_facility" do
    patch accompaniment_type_facility_url(@accompaniment_type_facility), params: { accompaniment_type_facility: {  } }, as: :json
    assert_response :success
  end

  test "should destroy accompaniment_type_facility" do
    assert_difference("AccompanimentTypeFacility.count", -1) do
      delete accompaniment_type_facility_url(@accompaniment_type_facility), as: :json
    end

    assert_response :no_content
  end
end
