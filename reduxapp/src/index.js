import React from "react";

import { render } from "react-dom";

import { Provider } from "react-redux";

import App from "./App.js";

//SEE: Redux Persist	https://www.npmjs.com/package/redux-persist
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./configureStore";

import "bootstrap/dist/css/bootstrap.min.css";

const { store, persistor } = configureStore();

// gets the id from the html -- make sure the id is root in index.html!
const root = document.getElementById("root");
// create the store and give access to the Application (App) via the Provider element.
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  root
);
