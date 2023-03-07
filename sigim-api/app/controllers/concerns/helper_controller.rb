module HelperController
  extend ActiveSupport::Concern

  #
  # Libera o método para ser usado na view
  #
  included do
    helper_method :display_pagination?, :generate_pagination
  end

  # Cria o json do paginador da view
  def generate_pagination(resources)
    json = {
      total_count: resources.total_count,
      current_page: resources.current_page,
      total_pages: resources.total_pages,
      limit_value: resources.limit_value,
      next_page: resources.next_page,
      prev_page: resources.prev_page,
      errors: []
    }
    
    json[:errors] = pagination_errors(resources)
    json
  end

  def display_pagination?
    boolean_convert(params[:paginate]) || blocked_by_limit_data?
  end 

  
  private

  def pagination_errors(resources)
    errors = []
    errors.push(I18n.t('helper.paginate.limit_max_data', 
                        limit_max_data: limit_max_data)
                      ) if limit_data_error?
    errors.push(I18n.t('helper.paginate.is_greater_than_total_pages',
                        page: param_page, 
                        total_pages: resources.total_pages)
                      ) if @is_greater_than_total_pages
    errors
  end
  
  def limit_data_error?
    (boolean_convert(params[:paginate]) && blocked_by_limit_data?)
  end 
  
  # Retorna o valor do filtro como booleano
  def boolean_convert(param_value)
    return true if param_value == 'true'
    return false
  end

end
