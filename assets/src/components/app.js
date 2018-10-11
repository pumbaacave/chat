import React from "react";
import ChatBar from "../containers/chat-bar";
import ChatHistory from "../containers/chat-history";

export default props => {
  return (
    <div>
      <ChatBar />
      <ChatHistory />
    </div>
  );
};
