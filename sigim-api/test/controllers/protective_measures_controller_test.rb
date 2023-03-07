require "test_helper"

class ProtectiveMeasuresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @protective_measure = protective_measures(:one)
  end

  test "should get index" do
    get protective_measures_url, as: :json
    assert_response :success
  end

  test "should create protective_measure" do
    assert_difference("ProtectiveMeasure.count") do
      post protective_measures_url, params: { protective_measure: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show protective_measure" do
    get protective_measure_url(@protective_measure), as: :json
    assert_response :success
  end

  test "should update protective_measure" do
    patch protective_measure_url(@protective_measure), params: { protective_measure: {  } }, as: :json
    assert_response :success
  end

  test "should destroy protective_measure" do
    assert_difference("ProtectiveMeasure.count", -1) do
      delete protective_measure_url(@protective_measure), as: :json
    end

    assert_response :no_content
  end
end
