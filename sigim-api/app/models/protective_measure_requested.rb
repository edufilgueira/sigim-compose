class ProtectiveMeasureRequested < ApplicationRecord

    # Association

    belongs_to :protective_measure
    belongs_to :protective_measure_type

    has_many :protective_measures

    # Validation

    validates_inclusion_of :requested, :in => [true, false]

end
