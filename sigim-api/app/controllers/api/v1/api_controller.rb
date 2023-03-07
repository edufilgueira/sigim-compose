module Api::V1
  class Api::V1::ApiController < BaseController
    include PaginatedController
    include FilteredController
    include SortedController
    include HelperController
  end
end