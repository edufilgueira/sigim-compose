require 'rails_helper'

describe User do
  #it_behaves_like 'models/paranoia'
  subject(:user) { build(:user) }

  describe 'devise' do
    describe 'database_authenticatable' do
      it { is_expected.to have_db_column(:email).of_type(:string) }
      it { is_expected.to have_db_column(:encrypted_password).of_type(:string) }
    end

    describe 'recoverable' do
      it { is_expected.to have_db_column(:reset_password_token).of_type(:string) }
    end
  end

  describe 'db' do
    describe 'columns' do
      it { is_expected.to have_db_column(:name).of_type(:string) }
      it { is_expected.to have_db_column(:tokens).of_type(:json) }
      it { is_expected.to have_db_column(:created_at).of_type(:datetime) }
      it { is_expected.to have_db_column(:updated_at).of_type(:datetime) }
    end
  end

end