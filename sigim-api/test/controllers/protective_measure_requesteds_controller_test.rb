require "test_helper"

class ProtectiveMeasureRequestedsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @protective_measure_requested = protective_measure_requesteds(:one)
  end

  test "should get index" do
    get protective_measure_requesteds_url, as: :json
    assert_response :success
  end

  test "should create protective_measure_requested" do
    assert_difference("ProtectiveMeasureRequested.count") do
      post protective_measure_requesteds_url, params: { protective_measure_requested: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show protective_measure_requested" do
    get protective_measure_requested_url(@protective_measure_requested), as: :json
    assert_response :success
  end

  test "should update protective_measure_requested" do
    patch protective_measure_requested_url(@protective_measure_requested), params: { protective_measure_requested: {  } }, as: :json
    assert_response :success
  end

  test "should destroy protective_measure_requested" do
    assert_difference("ProtectiveMeasureRequested.count", -1) do
      delete protective_measure_requested_url(@protective_measure_requested), as: :json
    end

    assert_response :no_content
  end
end
