class DenunciationCrimeType < ApplicationRecord
  belongs_to :denunciation
  belongs_to :crime_type
end
