require "test_helper"

class ForwardingProtocolsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @forwarding_protocol = forwarding_protocols(:one)
  end

  test "should get index" do
    get forwarding_protocols_url, as: :json
    assert_response :success
  end

  test "should create forwarding_protocol" do
    assert_difference("ForwardingProtocol.count") do
      post forwarding_protocols_url, params: { forwarding_protocol: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show forwarding_protocol" do
    get forwarding_protocol_url(@forwarding_protocol), as: :json
    assert_response :success
  end

  test "should update forwarding_protocol" do
    patch forwarding_protocol_url(@forwarding_protocol), params: { forwarding_protocol: {  } }, as: :json
    assert_response :success
  end

  test "should destroy forwarding_protocol" do
    assert_difference("ForwardingProtocol.count", -1) do
      delete forwarding_protocol_url(@forwarding_protocol), as: :json
    end

    assert_response :no_content
  end
end
