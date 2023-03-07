require "test_helper"

class PeopleContactsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @people_contact = people_contacts(:one)
  end

  test "should get index" do
    get people_contacts_url, as: :json
    assert_response :success
  end

  test "should create people_contact" do
    assert_difference("PeopleContact.count") do
      post people_contacts_url, params: { people_contact: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show people_contact" do
    get people_contact_url(@people_contact), as: :json
    assert_response :success
  end

  test "should update people_contact" do
    patch people_contact_url(@people_contact), params: { people_contact: {  } }, as: :json
    assert_response :success
  end

  test "should destroy people_contact" do
    assert_difference("PeopleContact.count", -1) do
      delete people_contact_url(@people_contact), as: :json
    end

    assert_response :no_content
  end
end
