class Relationship < ApplicationRecord

	# Associations

	belongs_to :person
	belongs_to :relationship, class_name: :Person, foreign_key: :relationship_id
	belongs_to :relationship_degree

	# Validation

	validates :observation, presence: true
	validates_inclusion_of :responsible, :in => [true, false]

	# Scopes
	
	def self.relationship_by_person(person_id)
		where(person_id: person_id)
	end

end
