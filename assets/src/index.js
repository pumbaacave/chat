import "phoenix_html";
import "./css/app.css";
import "./css/phoenix.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import ChatBar from "./components/chat-bar";
import ChatHistory from "./components/chat-history";
import reducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <div>
      <ChatBar />
      <ChatHistory />
    </div>
  </Provider>,
  document.querySelector(".container")
);
