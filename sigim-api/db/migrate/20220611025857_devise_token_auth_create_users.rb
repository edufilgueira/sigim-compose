class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[7.0]
  def change
    
    create_table :users, if_not_exists: true do |t|
      ## User Info
      t.string :name, null: false
      t.string :nickname
      t.string :image
      t.string :cpf, null: false
      t.string :email, null: false
      t.integer :user_type, default: 1, null: false
      t.integer :language, default: 0, null: false
      t.boolean :active, default: true, null: false

      ## Required
      t.string :provider, null: false, :default => "email"
      t.string :uid, null: false, :default => ""

      ## Database authenticatable
      t.string :encrypted_password, :null => false, :default => ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, :default => false

      ## Rememberable
      t.datetime :remember_created_at

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0, :null => false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet :current_sign_in_ip
      t.inet :last_sign_in_ip

      ## Tokens
      t.json :tokens

      t.timestamps
      t.datetime :deleted_at, index: true
    end

    add_index :users, :email,                unique: true
    add_index :users, :cpf,                  unique: true
    add_index :users, [:uid, :provider],     unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end
