import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import LoginForm from "./LoginForm";


// simple feedback function with submission values
function feedback(values) {
  window.alert(`You submitted:\n\n${JSON.stringify(values)}`);
};


ReactDOM.render(
  <Provider store={store}>
    <div>
      <LoginForm onSubmit={feedback}/>
    </div>
  </Provider>,
  document.getElementById("root")
);
