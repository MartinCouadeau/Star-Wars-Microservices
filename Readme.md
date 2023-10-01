# Star Wars Microservices

Welcome to the Star Wars Microservices

## Features

- CRUD operations for Characters, Planets and Films from Star Wars universe.
- Error handling

## Scripts

- `start`: Run the server.

## Deployment

The Star Wars Microservices is deployed and accessible on Google Cloud. You can interact with the API by making requests to the following base URL:

- Base URL: [http://35.198.60.234:4000](http://35.198.60.234:4000)

Please note that you do not need to set up or run the application locally. Simply use the provided base URL to access the API and explore the Star Wars universe.

## API endpoints

### Characters

- `GET /characters`: Get all characters
- `GET /characters/#`: Get 1 character where "#" is the ID of the character
- `POST /characters`: Create a new character
- `DELETE /characters/#`: Delete a character where "#" is the ID of the character

### Planets

- `GET /planets`: Get all planets
- `GET /planets/#`: Get 1 planet where "#" is the ID of the planet
- `POST /planets`: Create a new planet
- `DELETE /planets/#`: Delete a character where "#" is the ID of the planet

### Films

- `GET /films`: Get all film
- `GET /films/#`: Get 1 film where "#" is the ID of the film
- `POST /films`: Create a new film
- `DELETE /films/#`: Delete a character where "#" is the ID of the film

---