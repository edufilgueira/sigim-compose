
class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
  
  require 'fonetica'
end
