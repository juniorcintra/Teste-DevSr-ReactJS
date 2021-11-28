import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./config/ReactotronConfig";
import { store, persistor } from "./store";

import history from "./services/history";
import Routes from "./routes";
import ScrollFixer from "./ScrollFixer";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <GlobalStyle />
          <ScrollFixer />
          <Routes history={history} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
