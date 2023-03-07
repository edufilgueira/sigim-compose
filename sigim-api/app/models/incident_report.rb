class IncidentReport < ApplicationRecord

    # Associations

    belongs_to :victim, class_name: :Person, foreign_key: :victim_id
    belongs_to :aggressor, class_name: :Person, foreign_key: :aggressor_id
    belongs_to :crime_type
    belongs_to :violence_type
    belongs_to :violence_motivation
    belongs_to :occurrence_neighborhood, class_name: :Neighborhood, foreign_key: :occurrence_neighborhood_id
    belongs_to :source_system

    has_many :protective_measures

    # Validation
    
	validates :number, presence: true
    validates_inclusion_of :serviced_by_gavv, :have_access_firearm, :requests_protective_measure, :in => [true, false]
    
end
