class ForwardingProtocol < ApplicationRecord

  # Associations

	belongs_to :person
  belongs_to :facility, optional: true
  belongs_to :accompaniment_type, optional: true
  belongs_to :source_system, optional: true

end
