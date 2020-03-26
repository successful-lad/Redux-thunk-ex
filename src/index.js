import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./ConfigureStore";
import App from "./components/App";

const store = storeFactory();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
