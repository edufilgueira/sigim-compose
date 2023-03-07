#
# Módulo incluído em controllers que permitem ordenação.
#
# Os controllers que incluem esse módulo podem sobrescrever as contantes:
#
module SortedController
  extend ActiveSupport::Concern


  def filtered_scope
    resource_klass.all.order(order_by)
  end
  
  
  private

  def order_by
    return params[:order_by].present? ? params[:order_by] : "id"
  end

  # Métodos obsoletos

  def order
    order_params(remove_params) unless params_order_split.nil?
  end
  
  # Criar os simbolos da ordenação
  def order_params(orders)
    orders_symbol = []
    orders.split(',').each do |order|
      column = order.split(':')[0]
      sort   = sort_column(order.split(':')[1])
      orders_symbol.push("#{column} #{sort}")
    end

    orders_symbol.join(',')
  end

  # Permitir ordenação apenas pelos parametros permitidos
  def remove_params
    orders = params_order_split
    orders.each do |order|
      column = order.split(':')[0]
      orders.delete(order) unless permitted_params?(column)
    end
    
    orders.join(',')
  end
  
  def permitted_params?(column)
    column.to_sym.in?(self.class::PERMITTED_PARAMS)
  end
  
  def params_order_split 
    return params[:order_by].split(',') if params[:order_by].present?
  end
  
  def sort_column(sort)
    return "desc" if sort == "desc"
    "asc"
  end
end