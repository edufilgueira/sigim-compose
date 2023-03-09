FROM ruby:3.0.0-slim-buster AS builder

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev git nodejs nano

ENV BUNDLER_VERSION=2.3.6 

ENV INSTALL_PATH /app

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY sigim-api $INSTALL_PATH

RUN gem install bundler -v $BUNDLER_VERSION && \
    bundle install && \
    gem cleanup

#RUN bundle install

EXPOSE 3000

CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
