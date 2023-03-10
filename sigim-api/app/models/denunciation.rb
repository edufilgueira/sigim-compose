class Denunciation < ApplicationRecord
  # Associations

  belongs_to :victim, class_name: :Person, foreign_key: :victim_id
  belongs_to :aggressor, class_name: :Person, foreign_key: :aggressor_id, optional: true
  belongs_to :crime_type, optional: true
  belongs_to :violence_type, optional: true
  belongs_to :violence_motivation, optional: true
  belongs_to :occurrence_neighborhood, class_name: :Neighborhood, foreign_key: :occurrence_neighborhood_id,
                                       optional: true
  belongs_to :source_system, optional: true

  has_many :denunciation_aggressor_dependencies

  # Validation

  validates :number, presence: true
  validates_inclusion_of :serviced_by_gavv, :aggressor_have_access_firearm, :justified,
                         :intends_criminally_represent, in: [true, false]
end
