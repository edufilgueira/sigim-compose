require "test_helper"

class RiskLevelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @risk_level = risk_levels(:one)
  end

  test "should get index" do
    get risk_levels_url, as: :json
    assert_response :success
  end

  test "should create risk_level" do
    assert_difference("RiskLevel.count") do
      post risk_levels_url, params: { risk_level: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show risk_level" do
    get risk_level_url(@risk_level), as: :json
    assert_response :success
  end

  test "should update risk_level" do
    patch risk_level_url(@risk_level), params: { risk_level: {  } }, as: :json
    assert_response :success
  end

  test "should destroy risk_level" do
    assert_difference("RiskLevel.count", -1) do
      delete risk_level_url(@risk_level), as: :json
    end

    assert_response :no_content
  end
end
