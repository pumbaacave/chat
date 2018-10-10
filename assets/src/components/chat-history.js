import React, { Component } from "react";
import { connect } from "react-redux";

class ChatHistory extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <ul />
      </div>
    );
  }
}

function mapStateToProps({ ChannelData }) {
  return { chatHistories: ChannelData.chatHistories };
}

export default connect(
  mapStateToProps,
  null
)(ChatHistory);
