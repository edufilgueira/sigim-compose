class AccompanimentTypeFacility < ApplicationRecord
  belongs_to :facility
  belongs_to :accompaniment_type
end
