class Menu < ApplicationRecord
  acts_as_paranoid

  # Associations

  has_many :ability_actions

end
