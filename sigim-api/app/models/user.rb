# frozen_string_literal: true

class User < ActiveRecord::Base
  acts_as_paranoid

  # Associations

  belongs_to :ability_profile, optional: true

  # validates

  validates :name, :cpf, :email, presence: true
  validates_uniqueness_of :cpf

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, and :omniauthable
  devise :database_authenticatable,
         :confirmable,
         :registerable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable

  include DeviseTokenAuth::Concerns::User

  enum user_type: [:admin, :operator]

  enum language: [:pt, :en]

  ## Scopes

  def can?(code)
    admin? || ability_profile&.ability_actions&.find_by(action_code: code).present?
  end

  def self.reset_password(id, password, confirmation)
    find(id).reset_password( password, confirmation )
  end

end
