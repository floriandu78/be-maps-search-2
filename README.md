Scenario:
=========

A developer on our team was working on integrating the TomTom API. They did a great job laying the groundwork, but they've recently been promoted to a new project that requires their full attention.

We are pretty confident the developer managed to complete the majority of the initial part of the integration, however there might be a bug or two to be discovered.

Your task is to finish off this implementation, ensuring the requirements are met with passing tests.


Task:
=====
To take a partial address input and return full address suggestions along with the address broken into its individual components using the TomTom API.


Resources:
==========

Place Search Documentation: https://developer.tomtom.com/search-api/documentation/search-service/search-service
API Key: Oyb0npJAVdRwDauqpFez7zKCy2euUYql

Install:
========
1. yarn install

Test:
=====
1. yarn install
2. yarn test


Requirements:
=============

1. All tests should pass and ensure good coverage for new work
2. We only allow Australian addresses to be returned
3. Code should be maintainable and consistent
4. The result elements should contain important information about the place (country, municipality, etc)
5. The returned result should be typed and easily consumable via users of the library
6. No front-end requirements are necessary, this is purely a backend NodeJS library


SOLUTIONS
=============

1. Impletement structure of node project (config, controllers, models, utils, app.ts)
2. Implement App.ts which initialise Express app.
3. Create endpoint for /getAutoCompleteDetails
4. Fix typescript, replace all any types by their actual interface imported from ./models
5. Fix env variables (api key token). Import apiKey in getPlaceAutocomplete instead of passing the api key as an input.
6. Write all comments


IMPROVEMENTS
=============

- Imports using alias
- Find a way to use the types from a TOMTOM package instead of declaring them in our project
- Create different endPoints for different use cases (get a single place details)
- Implement more tests for getPlaceByID function
- Deploy express app on netlify
- Add linter / formatter


BUG FOUND
=============

- The place API returns the same address (in Eden, NSW) whatever placeId is passed to the endpoint. My wife is actually from Eden, is it a coincidence or a sign of god? Who knows :p

