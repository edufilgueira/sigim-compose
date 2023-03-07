require "test_helper"

class SourceSystemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @source_system = source_systems(:one)
  end

  test "should get index" do
    get source_systems_url, as: :json
    assert_response :success
  end

  test "should create source_system" do
    assert_difference("SourceSystem.count") do
      post source_systems_url, params: { source_system: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show source_system" do
    get source_system_url(@source_system), as: :json
    assert_response :success
  end

  test "should update source_system" do
    patch source_system_url(@source_system), params: { source_system: {  } }, as: :json
    assert_response :success
  end

  test "should destroy source_system" do
    assert_difference("SourceSystem.count", -1) do
      delete source_system_url(@source_system), as: :json
    end

    assert_response :no_content
  end
end
