module PaginatedController
  extend ActiveSupport::Concern

  #
  # Define se exeibe ou não a paginação do método index
  #
  PAGINATE = false
  
  #
  # Quantidade de dados por página
  #
  PER_PAGE = 10

  #
  # Limite máximo de dados para evitar carregar grandes massas de dados nao paginados na tela 
  #
  LIMIT_MAX_DATA = 1000

  #
  # Libera o método para ser usado na view
  #
  included do
    helper_method :blocked_by_limit_data?
  end

  def resources
    paginate? ? with_paginate : without_paginate
  end


  private
  
  def paginate?
    params[:paginate].present? ? boolean_convert(params[:paginate]) : self.class::PAGINATE
  end
  
  def is_greater_than_total_pages?(filtered)
    @is_greater_than_total_pages ||= param_page.to_i > filtered.total_pages
  end

  def with_paginate
    filtered = paginator(param_page)
    return paginator(filtered.total_pages) if is_greater_than_total_pages?(filtered)
    
    filtered
  end

  def without_paginate
    return with_paginate if blocked_by_limit_data?

    filtered_resources
  end
    
  def paginator(paging)
    filtered_resources.page(paging).per(per_page)
  end

  def per_page
    params[:per_page].present? ? params[:per_page] : self.class::PER_PAGE
  end

  def resource_count
    filtered_resources.count
  end

  def blocked_by_limit_data?
    resource_count > limit_max_data
  end

  def param_page 
    params[:page]
  end

  def limit_max_data
    self.class::LIMIT_MAX_DATA
  end

end
