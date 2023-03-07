puts " >>> RODANDO EM AMBIENTE: #{Rails.env.camelize}"
puts "- - - - - - - - - - "

load 'db/seeds/source_systems.seeds.rb'
load 'db/seeds/risk_levels.seeds.rb'
load 'db/seeds/states.seeds.rb'
load 'db/seeds/cities.seeds.rb'
load 'db/seeds/neighborhoods_ce.seeds.rb'
load 'db/seeds/types.seeds.rb'
load 'db/seeds/ability_profile.seeds.rb'
load 'db/seeds/admin_user.seeds.rb'
# load 'db/seeds/faker_data.seeds.rb' if Rails.env == "development"