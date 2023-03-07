class AbilityProfile < ApplicationRecord
  acts_as_paranoid

  # Associations
  
  has_many :ability_permissions, dependent: :destroy
  has_many :ability_actions, through: :ability_permissions
  has_many :users
  
  # Validation
    
  validates :name, presence: true

  ## Helpers

  def label
    "#{name}"
  end
end