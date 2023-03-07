puts "Admin User >>>"

require 'securerandom'

email_admin = "admin@admin.com"
password_admin = "12345678" if Rails.env == "development"
password_admin = SecureRandom.alphanumeric(10) if Rails.env == "production"

if !User.find_by(email: email_admin)
    if User.create(
            ability_profile_id: 1,
            active: true,
            cpf: "000.000.000-01",
            email: email_admin,
            name: "ADMIN",
            password:  password_admin,
            password_confirmation: password_admin,
            phone_number: "(99) 99999.9999",
            confirmed_at: DateTime.now
        )
        puts ">>> Usuário ADMIN criado"
        puts ">>> E-mail: " + email_admin
        puts ">>> Password: " + password_admin
    else
        puts ">>> ERROR: Não foi possível criar usuário ADMIN!"
        puts ">>> E-mail: " + email_admin
    end
else
    puts ">>> Usuário ADMIN JÁ EXISTE!"
    puts ">>> E-mail: " + email_admin
end 