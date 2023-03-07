require "test_helper"

class AccompanimentTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @accompaniment_type = accompaniment_types(:one)
  end

  test "should get index" do
    get accompaniment_types_url, as: :json
    assert_response :success
  end

  test "should create accompaniment_type" do
    assert_difference("AccompanimentType.count") do
      post accompaniment_types_url, params: { accompaniment_type: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show accompaniment_type" do
    get accompaniment_type_url(@accompaniment_type), as: :json
    assert_response :success
  end

  test "should update accompaniment_type" do
    patch accompaniment_type_url(@accompaniment_type), params: { accompaniment_type: {  } }, as: :json
    assert_response :success
  end

  test "should destroy accompaniment_type" do
    assert_difference("AccompanimentType.count", -1) do
      delete accompaniment_type_url(@accompaniment_type), as: :json
    end

    assert_response :no_content
  end
end
