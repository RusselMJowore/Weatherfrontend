# Weatherfrontend

Weather Forecast Angular App
This Angular application provides a user interface to interact with the Weather Forecast API. It allows users to retrieve current weather conditions and five-day forecasts for different locations.

Features
Display weather conditions
Show five-day weather forecast
Search for weather by location
View detailed weather information

Setup
Clone this repository to your local machine.
Copy code git
Navigate to the project directory.
Install dependencies using npm or yarn.
Run the development server.
Open your browser and visit http://localhost:4200 to view the application.

Usage
Enter the name of a location in the search bar and click "Search".
The current weather conditions for the specified location will be displayed.
Click on "View Forecast" to see the five-day weather forecast for the location.
Use the navigation buttons to switch between different locations and view their weather forecasts.

Technologies Used
Angular: Frontend framework for building the user interface
TypeScript: Programming language used in Angular applications
Bootstrap: CSS framework for styling the application
Weather Forecast API: Backend service providing weather data
API Integration
This application integrates with the Weather Forecast API to fetch weather data. Make sure to configure the API base URL in the environment files (environment.ts and environment.prod.ts).

To test end to end, please clone the project API from this address: https://github.com/RusselMJowore/weatherapi 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## API
Project api to be found here: https://github.com/RusselMJowore/weatherapi

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
