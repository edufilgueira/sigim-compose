FactoryBot.define do
  factory :user do
    sequence(:name) {|n| "Usuário teste #{n}"}
    sequence(:email) {|n| "user-#{n}@example.com"}
    encrypted_password { "ABCabc123!@#" }
  end
end
  