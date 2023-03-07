 namespace :sigim do
  DEFAULT_FILES_PATH = File.join(Rails.root, 'lib', 'tmp')
     task dev: :environment do
     if Rails.env.development?
     show_spinner("DBs Excluidos...") { %x(rails db:drop) }
     show_spinner("DBs Criados...") { %x(rails db:create) }
     show_spinner("Dbs Migrados...") { %x(rails db:migrate) }
     show_spinner("DBs Populados...") { %x(rails db:seed) }
     else
     show_spinner("Você não está em ambiente de desenvolvimento!")
    end
end

def show_spinner(msg_start, msg_end = "Concluído!")
  spinner = TTY::Spinner.new("[:spinner] #{msg_start}")
  yield
  spinner.success("(#{msg_end})")    
  end
end