class Person < ApplicationRecord
	include ::Fonetical

	# Association

	belongs_to :place_of_birth, class_name: :City, foreign_key: :place_of_birth_id, optional: true
	belongs_to :gender, optional: true
	belongs_to :gender_identity, optional: true
	belongs_to :sexual_orientation, optional: true
	belongs_to :breed, optional: true
	belongs_to :skin_color, optional: true
	belongs_to :ethnicity, optional: true
	belongs_to :civil_status, optional: true
	belongs_to :scholarity, optional: true
	belongs_to :source_system, optional: true
	belongs_to :risk_level, optional: true
  belongs_to :housing_situation, optional: true

	has_many :people_addresses
	has_many :people_contacts
	has_many :relationships
	has_many :forwarding_protocols
	has_many :lawsuits
	has_many :incident_reports
	has_many :handicap_people

	# Validation
    
	validates :name, presence: true
	validates_inclusion_of :chemical_dependent, :psychological_disorder, :pwd, :in => [true, false]
	 
end
