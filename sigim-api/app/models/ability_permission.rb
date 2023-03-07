class AbilityPermission < ApplicationRecord
  acts_as_paranoid

  # Associations

  belongs_to :ability_profile
  belongs_to :ability_action

  #  Validations

  validates :ability_profile_id, :ability_action_id,  presence: true
  validates :ability_profile_id, uniqueness: {scope: :ability_action_id}

end