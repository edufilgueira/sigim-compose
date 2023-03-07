require "test_helper"

class PeopleAddressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @people_address = people_addresses(:one)
  end

  test "should get index" do
    get people_addresses_url, as: :json
    assert_response :success
  end

  test "should create people_address" do
    assert_difference("PeopleAddress.count") do
      post people_addresses_url, params: { people_address: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show people_address" do
    get people_address_url(@people_address), as: :json
    assert_response :success
  end

  test "should update people_address" do
    patch people_address_url(@people_address), params: { people_address: {  } }, as: :json
    assert_response :success
  end

  test "should destroy people_address" do
    assert_difference("PeopleAddress.count", -1) do
      delete people_address_url(@people_address), as: :json
    end

    assert_response :no_content
  end
end
