class AbilityResource < ApplicationRecord
  acts_as_paranoid
  
  # Associations
  
  has_many :ability_actions

  # Validation
    
  validates :name, presence: true

  ## Helpers

  def label
    "#{name}"
  end
end
