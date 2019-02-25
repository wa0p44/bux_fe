# BUX Frontend developer home assignment

## About the app

The project is a React app that will make use of the trading API provided by the IEX Group.
Once the app is loaded the user can enter a stock ticker symbol in the search field.
If a valid symbol is entered the details of the company along with the company price will be shown.
An error message will be displayed if an invalid symbol is entered.
A button at the bottom of the company details will allow the user to add this company symbol to the list of favorites.
A button to clear the list of favorites will also be shown if the favorites list is not empty.

## Installation

1. Clone the repo
2. Install the dependencies by running `npm install` or `yarn install`

## Run the app

To run the app you can either:

1. Run the dev script from the terminal: `npm run dev` or `yarn dev`. This will start the webpack-dev-server which will automatically launch the app in the default browser.

2. Run the build script from the terminal: `npm run build` or `yarn build`.
   This will build the app in the dist folder. From the dis folder open index.html in the browser to launch the app.
