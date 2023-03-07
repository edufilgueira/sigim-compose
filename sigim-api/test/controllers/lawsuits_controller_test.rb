require "test_helper"

class LawsuitsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lawsuit = lawsuits(:one)
  end

  test "should get index" do
    get lawsuits_url, as: :json
    assert_response :success
  end

  test "should create lawsuit" do
    assert_difference("Lawsuit.count") do
      post lawsuits_url, params: { lawsuit: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show lawsuit" do
    get lawsuit_url(@lawsuit), as: :json
    assert_response :success
  end

  test "should update lawsuit" do
    patch lawsuit_url(@lawsuit), params: { lawsuit: {  } }, as: :json
    assert_response :success
  end

  test "should destroy lawsuit" do
    assert_difference("Lawsuit.count", -1) do
      delete lawsuit_url(@lawsuit), as: :json
    end

    assert_response :no_content
  end
end
