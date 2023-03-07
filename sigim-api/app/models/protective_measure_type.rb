class ProtectiveMeasureType < ApplicationRecord

    # Association

    has_many :protective_measure_requesteds

    # Validation
		
	validates :name, presence: true
end
