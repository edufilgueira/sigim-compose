class DenunciationAggressorDependency < ApplicationRecord

    # Associations
  
    belongs_to :denunciation
    belongs_to :dependency_type
  
    # Validation
      
    validates :denunciation, presence: true
    validates :dependency_type, presence: true
  
end