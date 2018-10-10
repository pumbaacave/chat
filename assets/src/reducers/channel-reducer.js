import socket from "../socket";
import { pushHistory, PUSH_HISTORY } from "../actions";

const channel = socket.channel("room:lobby", {}); // connect to chat "room"

channel.on("shout", payload => {
  // listen to the 'shout' event
  pushHistory(payload);
  let li = document.createElement("li"); // creaet new list item DOM element
  let name = payload.name || "guest"; // get name from payload or set default
  li.innerHTML = "<b>" + name + "</b>: " + payload.message; // set li contents
  ul.appendChild(li); // append to list
});

channel.join(); // join the channel.

const initialState = {
  channel: channel,
  chatHistories: []
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_HISTORY:
      let Value = {
        ...state,
        chatHistories: [...state.chatHistories, action.payload]
      };
      console.log(Value);
      return Value;

    default:
      return state;
  }
}
