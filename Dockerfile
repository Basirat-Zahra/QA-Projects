FROM cypress/included:13.1.0

WORKDIR /e2e

COPY "Cypress Tests/package*.json" .  
RUN npm install

COPY "Cypress Tests" .

# Run tests
CMD ["npx", "cypress", "run"]
