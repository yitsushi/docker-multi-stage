FROM ruby:2.5.0-alpine3.7 as builder

# Install dependencies for native extensions
RUN apk add --no-cache build-base libffi-dev

# This will be our application root folder
WORKDIR /application

# Copy all the content from docroot
COPY docroot /application

# Build our application
RUN bundle install
RUN bundle exec rake


FROM nginx:latest

COPY --from=builder /application/public /usr/share/nginx/html
