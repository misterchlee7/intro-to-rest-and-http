var request = require('request');

describe('My RESTful API', () => {
  const CITY_ENDPOINT = 'http://localhost:1337/api/location/city';
  const RESTAURANT_ENDPOINT = 'http://localhost:1337/api/location/restaurant';

  test('should respond to requests to /api/locations/cities with stringified JSON.', () => {
    request(CITY_ENDPOINT, function(error, response, body) {
      expect(() => JSON.parse(body)).not.toThrow();
    });
  });

  test('should respond to requests to /api/locations/restaurants with stringified JSON.', () => {
    request(RESTAURANT_ENDPOINT, function(error, response, body) {
      expect(() => JSON.parse(body)).not.toThrow();
    });
  });

  test('should respond to requests to /api/locations/cities with a parsable stringified object.', () => {
    request(CITY_ENDPOINT, function(error, response, body) {
      expect(typeof JSON.parse(body)).toBe('object');
    });
  });

  test('should respond to requests to /api/locations/restaurants with a parsable stringified object.', () => {
    request(RESTAURANT_ENDPOINT, function(error, response, body) {
      expect(typeof JSON.parse(body)).toBe('object');
    });
  });

  test('should respond to GET requests to /api/locations/cities with a 200 status code.', () => {
    request(CITY_ENDPOINT, function(error, response, body) {
      expect(response.statusCode).toBe(200);
    });
  });

  test('should respond to GET requests to /api/locations/cities with an object containing a `data` array of all the cities.', () => {
    request(CITY_ENDPOINT, function(error, response, body) {
      var data = JSON.parse(body);
      expect(Array.isArray(data)).toBe(true);
    });
  });
  // test('should respond to POST requests to /api/locations/cities with a 201 status code if sending a city object that contains all required properties.', () => {});
  // test('should respond to POST requests to /api/locations/cities with a 400 status code if sending a city object that DOES NOT contain all required properties.', () => {});
  // test('should respond to POST requests to /api/locations/cities with the city object that was created.', () => {});
  // test('should respond to PUT requests to /api/locations/cities with a 200 status code.', () => {});
  // test('should respond to PUT requests to /api/locations/cities with the city object that was updated.', () => {});
  // test('should respond to DELETE requests to /api/locations/cities with a 200 status code.', () => {});
  // test('should respond to DELETE requests to /api/locations/cities with the city object that was deleted.', () => {});
  // test('should respond to GET requests to /api/locations/restaurants with a 200 status code.', () => {});
  // test('should respond to GET requests to /api/locations/restaurants with an object containing a `data` array of all the restaurants.', () => {});
  // test('should respond to POST requests to /api/locations/restaurants with a 201 status code if sending a restaurant object that contains all required properties.', () => {});
  // test('should respond to POST requests to /api/locations/restaurants with a 400 status code if sending a restaurant object that DOES NOT contain all required properties.', () => {});
  // test('should respond to POST requests to /api/locations/restaurants with the restaurant object that was created.', () => {});
  // test('should respond to PUT requests to /api/locations/restaurants with a 200 status code.', () => {});
  // test('should respond to PUT requests to /api/locations/restaurants with the restaurant object that was updated.', () => {});
  // test('should respond to DELETE requests to /api/locations/restaurants with a 200 status code.', () => {});
  // test('should respond to DELETE requests to /api/locations/restaurants with the restaurant object that was deleted.', () => {});
});