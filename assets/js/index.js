import "phoenix_html"
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket";
import ChatBar from "./components/chat-bar";
import reducer from "./reducers";

const channel = socket.channel('room:lobby', {}); // connect to chat "room"

channel.on('shout', (payload) => { // listen to the 'shout' event
  let li = document.createElement("li"); // creaet new list item DOM element
  let name = payload.name || 'guest';    // get name from payload or set default
  li.innerHTML = '<b>' + name + '</b>: ' + payload.message; // set li contents
  ul.appendChild(li);                    // append to list
});

channel.join(); // join the channel.


const ul = document.getElementById('msg-list');        // list of messages.

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <ChatBar channel={channel} />
  </Provider>,
  document.querySelector(".container")
);
