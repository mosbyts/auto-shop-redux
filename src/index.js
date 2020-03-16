import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { store } from './store/index'
import App from "./store/App";

// Create Store, Wrap the Provider Component to the App

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
