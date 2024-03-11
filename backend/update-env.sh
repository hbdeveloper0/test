#!/bin/bash

# Read .env.staging file
while IFS='=' read -r key value; do
  # Update environment variable in Vercel
  vercel env add "$key" "$value" --prod
done < .env.staging