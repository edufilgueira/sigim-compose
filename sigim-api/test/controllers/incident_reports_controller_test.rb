require "test_helper"

class IncidentReportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @incident_report = incident_reports(:one)
  end

  test "should get index" do
    get incident_reports_url, as: :json
    assert_response :success
  end

  test "should create incident_report" do
    assert_difference("IncidentReport.count") do
      post incident_reports_url, params: { incident_report: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show incident_report" do
    get incident_report_url(@incident_report), as: :json
    assert_response :success
  end

  test "should update incident_report" do
    patch incident_report_url(@incident_report), params: { incident_report: {  } }, as: :json
    assert_response :success
  end

  test "should destroy incident_report" do
    assert_difference("IncidentReport.count", -1) do
      delete incident_report_url(@incident_report), as: :json
    end

    assert_response :no_content
  end
end
