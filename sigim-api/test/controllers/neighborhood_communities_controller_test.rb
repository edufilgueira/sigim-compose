require "test_helper"

class NeighborhoodCommunitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @neighborhood_community = neighborhood_communities(:one)
  end

  test "should get index" do
    get neighborhood_communities_url, as: :json
    assert_response :success
  end

  test "should create neighborhood_community" do
    assert_difference("NeighborhoodCommunity.count") do
      post neighborhood_communities_url, params: { neighborhood_community: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show neighborhood_community" do
    get neighborhood_community_url(@neighborhood_community), as: :json
    assert_response :success
  end

  test "should update neighborhood_community" do
    patch neighborhood_community_url(@neighborhood_community), params: { neighborhood_community: {  } }, as: :json
    assert_response :success
  end

  test "should destroy neighborhood_community" do
    assert_difference("NeighborhoodCommunity.count", -1) do
      delete neighborhood_community_url(@neighborhood_community), as: :json
    end

    assert_response :no_content
  end
end
