require "test_helper"

class SectorialsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sectorial = sectorials(:one)
  end

  test "should get index" do
    get sectorials_url, as: :json
    assert_response :success
  end

  test "should create sectorial" do
    assert_difference("Sectorial.count") do
      post sectorials_url, params: { sectorial: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show sectorial" do
    get sectorial_url(@sectorial), as: :json
    assert_response :success
  end

  test "should update sectorial" do
    patch sectorial_url(@sectorial), params: { sectorial: {  } }, as: :json
    assert_response :success
  end

  test "should destroy sectorial" do
    assert_difference("Sectorial.count", -1) do
      delete sectorial_url(@sectorial), as: :json
    end

    assert_response :no_content
  end
end
