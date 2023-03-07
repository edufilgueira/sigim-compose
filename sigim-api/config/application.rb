require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SigimApi
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    
    # Carrega os locales separados em vários arquivos
    config.i18n.load_path += Dir[
      Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s
    ]

    I18n.available_locales = [:en, :"pt-BR"]
    I18n.default_locale = :"pt-BR"


    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*',
          headers: :any,
          expose: %i(access-token expiry token-type uid client),
          methods: %i(get post put patch delete options head)
      end
    end

    # Carrega os arquivos de rotas separados em config/routes
    routes = Dir[Rails.root.join("config/routes/*.rb")] + config.paths['config/routes.rb']
    config.paths['config/routes.rb'] = routes

    config.middleware.use Rack::Attack

    # Alteração realizada para davise_token_auth
    # A devise exige que as sessions estejam abilitadas, e o rails 7 vem com
    # as sessions desabilitadas. Estes codigos, a baixo, corrige este problema.
    config.session_store :cookie_store, key: '_interslice_session'
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use config.session_store, config.session_options
    # ----
  end
end
