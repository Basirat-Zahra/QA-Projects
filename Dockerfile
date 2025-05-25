FROM cypress/included:13.0.0

WORKDIR /app
COPY . .

RUN npm install

CMD ["npx", "cypress", "run"]
