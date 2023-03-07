class Lawsuit < ApplicationRecord

  # Associations
  belongs_to :victim, class_name: :Person, foreign_key: :victim_id
  belongs_to :aggressor, class_name: :Person, foreign_key: :aggressor_id
	belongs_to :crime_type
  belongs_to :violence_type
  belongs_to :violence_motivation
  belongs_to :source_system

  # Validation
    
	validates :number, presence: true


end
