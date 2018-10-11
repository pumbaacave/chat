import socket from "../socket";

const CHANNEL_JOINED = "CHANNAL_JOINED";
export const PUSH_HISTORY = "PUSH_HISTORY";
export const NOTIFY_SHOUTED = "NOTIFY_SHOUTED";

let channel;

function newChannel() {
  channel = socket.channel("room:lobby", {}); // connect to chat "room"

  channel.join(); // join the channel.
}

export function channelJoin(dispatch) {
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
    type: NOTIFY_SHOUTED,
    payload: data
  };
}

export function pushHistory(payload = {}) {
  // if (!payload) {
  console.log({ payload });
  channel.push("shout", payload);
  return {
    type: PUSH_HISTORY,
    payload: {}
  };
  //}
}
