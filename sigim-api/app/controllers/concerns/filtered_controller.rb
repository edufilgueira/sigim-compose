module FilteredController
  extend ActiveSupport::Concern

  #
  # Configuraçãos dos joins do recurso
  #
  ASSOCIATIONS = []

  #
  # Usado para permitir que os registros sejam filtradas por colunas de igualdade
  # Ex: name_id = 1
  #
  FILTERED_COLUMNS = []

  #
  # Usado para permitir que os registros sejam filtradas por suas associações
  #
  FILTERED_ASSOCIATIONS = []

  #
  # Usado para permitir filtro por expressão como like textual 
  #
  FILTERED_EXPRESSION = []

  def filtered_resources
    filtered(resource_klass, filtered_scope)
  end

  #
  # Aplica o filtro básico (busca textual), por enums e associações
  #
  def filtered(model, resources)
    filtered_by_columns_enums_and_associations(
      model,
      resources
    )
  end


  private
  
  #
  # Helper que aplica os três filtros comuns
  # Ex: resources.joins(neighborhood: :city).where({ 'city.id': 2571 } )
  #
  def filtered_by_columns_enums_and_associations(model, resources)
    filtered = joins_change(resources, joins_associations)
    filtered = filtered_by_columns(model, filtered)
    filtered = filtered_by_expression(model, filtered)
    filtered_by_associations(model, filtered)
  end
  
  def filtered_by_columns(model, resources)
    filtered_by_value(model, resources, filtered_columns)
  end

  def filtered_by_associations(model, resources)
    filtered_by_value_associations(model, resources, filtered_associations)
  end

  def filtered_by_expression(model, resources)
    filtered_by_value_expressions(model, resources, filtered_expression)
  end

  #
  # Método de escopo
  #
  def filtered_scope
    resource_klass.all
  end  

  def filtered_columns
    self.class::FILTERED_COLUMNS
  end
  
  def filtered_associations
    self.class::FILTERED_ASSOCIATIONS
  end

  def filtered_expression
    self.class::FILTERED_EXPRESSION[0]
  end

  def joins_associations
    self.class::ASSOCIATIONS
  end

  def expression(model)
    model::SEARCH_EXPRESSION
  end  


  #
  # Core do método compartilhado
  #
  def filtered_by_value(model, resources, filtered_columns_names)
    filtered = resources
    filtered_columns_names.each do |filter|
      table_name = table_name(model)
      filter_name = filter_name(filter)
      filter_value = filter_value(model, filter)
      
      if (filter_value.present? || filter_value == false)
        filtered = filtered.where("#{table_name}": {"#{filter_name}": filter_value})
      end
    end
    filtered
  end

  def filtered_by_value_associations(model, resources, filtered_columns_names)
    filtered = resources
    filtered_columns_names&.each do |filter|
      table_name = table_name(model)
      filter_name = filter_name(filter)
      filter_value = filter_value(model, filter)
      
      if (filter_value.present? || filter_value == false)
        filtered = filtered.where({"#{filter_name}": filter_value})
      end
    end
    filtered
  end

  def filtered_by_value_expressions(model, resources, filtered_columns_names)
    filtered = resources
    filtered_columns_names&.each do |filter|
      table_name = table_name(model)
      filter_name = filter_name(filter[0])
      filter_value = filter_value(model, filter[0])
      
      if (filter_value.present? || filter_value == false)
        filtered = filtered.where("#{filter[1].gsub("?",filter_value)}")
      end
    end
    filtered
  end

  def joins_change(resources, associations)
    filtered = resources
    associations.each do |filter|
      filtered = filtered.joins(filter)
    end
    filtered
  end

  # Retorna o nome da tabela usada.
  def table_name(model)
    model.table_name
  end

  # Retorna o nome do filtro.
  def filter_name(filter)
    filter.to_s.downcase
  end

  # Retorna o valor do parâmetro que deve ser filtrado.
  def filter_value(model, filter)
    table_name = table_name(model)
    filter_name = filter_name(filter)

    param_value = params[filter_name]

    if param_value == nil
      # tenta achar parâmetro de outra tabela
      param_value = params["#{table_name}.#{filter_name}"]
    end

    param_value
  end

  # Retorna se o filtro é do tipo boolean
  def boolean?(filter_value)
    filter_value == 'true' || filter_value == 'false'
  end
  
end
