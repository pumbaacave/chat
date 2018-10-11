import socket from "../socket";

const CHANNEL_JOINED = "CHANNAL_JOINED";
export const PUSH_HISTORY = "PUSH_HISTORY";
export const ACTION_SHOUT = "ACTION_SHOUT";

let channel;

function newChannel() {
  channel = socket.channel("room:lobby", {}); // connect to chat "room"

  channel.on("shout", payload => {
    // listen to the 'shout' event
    pushHistory(payload);
    let li = document.createElement("li"); // creaet new list item DOM element
    let name = payload.name || "guest"; // get name from payload or set default
    li.innerHTML = "<b>" + name + "</b>: " + payload.message; // set li contents
    ul.appendChild(li); // append to list
  });

  channel.join(); // join the channel.
}

export function channelJoin(dipatch) {
  newChannel();
  channel.on("shout", data => {
    dispatch(notifyShouted(data));
  });
  return {
    type: CHANNEL_JOINED,
    payload: {}
  };
}

export function notifyShouted(data = {}) {
  return {
    type: ACTION_SHOUT,
    payload: data
  };
}

export function pushHistory(payload = "") {
  // if (!payload) {
  console.log({ payload });
  channel.push("shout", payload);
  return {
    type: PUSH_HISTORY,
    payload: payload
  };
  //}
}
