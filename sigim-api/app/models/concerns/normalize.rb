module Normalize
  extend ActiveSupport::Concern

  included do
    
    # Action

    before_create do
      set_normalize
    end

    before_update do
      set_normalize
    end

    def set_normalize
      self.name = self.name.sem_acento.mb_chars.upcase
    end
  end

end