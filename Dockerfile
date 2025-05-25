FROM cypress/included:13.1.0

# Set working directory
WORKDIR /e2e

COPY "Cypress Tests" .

RUN npm install

# Run tests 
CMD ["npx", "cypress", "run"]
