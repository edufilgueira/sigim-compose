# Comandos Docker

Dando permissão ao docker para ser executado pelo usuario comum, dessa forna não é necessário executar **sudo** antes das execuções do docker.
```PowerShell
sudo usermod -aG docker eduardo
```


INICIANDO O DOCKER
```PowerShell
sudo service docker start
```

ALTERAR DONO DAS SPASTAS
```PowerShell
sudo chown 1000:1000 -R protecao-na-medida-tj-api
```

ENTRAR NO CONTAINER
```PowerShell
docker exec -it api_sigim bash
```

LISTAR CONTAINER
```PowerShell
docker ps
docker ps -a
```

LISTAR IMAGENS
```PowerShell
docker images
```

PARAR CONTAINERS
```PowerShell
docker stop id_container
```

REMOVER CONTAINER
```PowerShell
docker rm id_container
```

REMOVER IMAGENS
```PowerShell
docker rmi id_imagem
```

VISUALIZAR LOGS
```PowerShell
docker exec -it api_sigim bash
tail log/development.log
```

# Comandos Docker Compose

Comandos para gerar a imagem, levantar e indisponibilizar os contaners respectivamente.

```PowerShell
docker compose build
```

```PowerShell
docker compose up -d
```

```PowerShell
docker compose down
```


# Erros docker
## Erro01 - Problema com DNS executar o seguinte procedimento

1. Criar um arquivo
```
sudo nano /etc/docker/daemon.json
```

2. Especificar um servidor DNS para contêineres docker com este conteúdo:

```
{
  "dns": ["8.8.8.8", "8.8.4.4"]
}
```

3. Reinicie o serviço docker:

```
sudo service docker restart
```



# Standard Model Engine

Esta é a **Standard Model Engine** para iniciação de um projeto contemplando toda a gestão de código incluindo autenticação, cache, segurança e desenvolvimento.

O objetivo deste documento é facilitar a iniciação de novos projetos através de um motor basico com as principais funcionalidades e gens necessárias para iniciar um projeto robusto e organizado.

## O que contempla a API

1. Rails 7
1. Teste rspec
1. Guard
1. Debugger
1. Controle de acesso Devise_Token_Auth
1. Internacionalização Devise_Token_Auth "pt-BR" e "en" 
1. Cors
1. Hack Attack
1. simulador de envio de email
1. Versionamento de serviços
1. Uso do conceito de herança (Código limpo)
1. Paranoia configurada


Segua o passo a passo contendo neste doucumento caso seja necessário inicar um projeto do zero.


## Gems

~~~ruby
source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'

# core
gem 'rails', '~> 7.0.3'
gem 'rack-cors'
gem 'puma', '~> 5.0'
gem 'paranoia'

# auth
gem 'devise'
gem 'devise-i18n'

# token authentication


# cache
gem 'bootsnap', '>= 1.4.4', require: false

# email
gem 'premailer-rails' # html emails made easy

# database
gem 'bcrypt', '3.1.12'
gem 'pg', '~> 1.1'

# security
gem 'rack-attack'

# development
group :development do
  gem 'listen', '~> 3.3'
  gem 'spring'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'factory_bot_rails'
end

group :test do
  gem 'database_cleaner'
  gem 'guard-rspec'
  gem 'terminal-notifier-guard', require: false
  gem 'codeclimate-test-reporter'
  gem 'rails-controller-testing'
  gem 'rspec'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
  gem 'shoulda-callback-matchers', '~> 1.1.1'
  gem 'spring-commands-rspec'
  gem 'fake_ftp'
  gem 'simplecov'
  gem 'simplecov-rcov'
end

# time zone data
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
~~~


# Configurações Adicionais

## **CORS**
fornece suporte para Cross-Origin Resource Sharing (CORS) para aplicativos da Web compatíveis com Rack.

#### Code
~~~ruby
gem 'rack-cors'
~~~


#### Adicionar em application.rb
~~~ruby
config.middleware.insert_before 0, Rack::Cors do
    allow do
    origins '*'
    resource '*',
        headers: :any,
        methods: %i(get post put patch delete options head)
    end
end
~~~

## **Rack-Attack**
Middleware de rack para bloquear e limitar solicitações abusivas

~~~ruby
gem 'rack-attack'
~~~

Crie um arquivo chamado rack_attack.rb em config/initializers/ e adicione o seguinte código:

#### Code
~~~ruby
class Rack::Attack
  Rack::Attack.cache.store = ActiveSupport::Cache::MemoryStore.new

  # Allow all local traffic
  safelist('allow-localhost') do |req|
    '127.0.0.1' == req.ip || '::1' == req.ip
  end
  
  # Allow an IP address to make 10 requests every 10 seconds
  throttle('req/ip', limit: 5, period: 5) do |req|
    req.ip
  end
  
  # Throttle login attempts by email address
  throttle("logins/email", limit: 5, period: 20.seconds) do |req|
   if req.path == '/users/sign_in' && req.post?
     req.params['email'].presence
   end
  end
end
~~~

#### Adicionar em application.rb

~~~ruby
config.middleware.use Rack::Attack
~~~

## **Guard**

O Guard automatiza várias tarefas executando regras personalizadas sempre que arquivos ou diretórios são modificados.

É frequentemente usado por desenvolvedores de software, web designers, escritores e outros especialistas para evitar ações e comandos mundanos e repetitivos, como "relançamento" de ferramentas após alterar arquivos ou configurações de origem.

#### Code
~~~ruby
gem 'guard-rspec'
gem 'terminal-notifier-guard', require: false
~~~

#### RUN

Gera o arquivo *Guardfile* vazio
~~~ruby
bundle
bundle exec guard init
~~~

#### EXE

Executa o guard
~~~ruby
bundle exec guard
~~~


## **Rspec**

Testes automatizados são parte integral de aplicações Web. Testes são indispensáveis em desenvolvimento e neste bloco vamos mostrar como começar a aplicar testes na aplicação **Ruby on Rails** usando Rspec.

Vamos instalar e configurar Rspec Rails seguindo as instruções da ferramenta. Primeiro adicionamos a gem aos grupos :test e :development no Gemfile da sua aplicação.

#### Code
~~~ruby
group :development, :test do
  gem 'factory_bot_rails'
end

group :test do
  gem 'codeclimate-test-reporter'
  gem 'rails-controller-testing'
  gem 'rspec'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
  gem 'shoulda-callback-matchers', '~> 1.1.1'
  gem 'spring-commands-rspec'
  gem 'fake_ftp'
end
~~~
#### RUN

Comando para criar os arquivos de configuração *spec_helper.rb* e *rails_helper.rb*


~~~ruby
rails generate rspec:install
~~~

Altere o arquivo *rails_helper.rb* par realizar as configurações necessárias.

~~~ruby
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../config/environment', __dir__)
abort("The Rails environment is running in production mode!") if Rails.env.production?

require 'spec_helper'
require 'rspec/rails'
require 'shoulda/matchers'

begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  puts e.to_s.strip
  exit 1
end

RSpec.configure do |config|
  #config.order = 'random'

  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.use_transactional_fixtures = true

  config.include FactoryBot::Syntax::Methods

  config.filter_run :focus

  config.run_all_when_everything_filtered = true

  config.infer_spec_type_from_file_location!

  config.filter_rails_from_backtrace!
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
~~~
