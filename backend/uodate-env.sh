#!/bin/bash

# Check if .env.staging file exists
if [ -f .env.staging ]; then
  # Copy .env.staging to .env
  cp .env.staging .env
  echo "Created .env file from .env.staging"
else
  echo "No .env.staging file found"
fi
