class DenunciationVictim < ApplicationRecord
  belongs_to :denunciation
  belongs_to :person
end
