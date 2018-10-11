import React, { Component } from "react";
import { connect } from "react-redux";

class ChatHistory extends Component {
  renderMessage() {
    return this.props.chatHistories.map(data => {
      console.log(data);
      return (
        <li className="list-group-item" key={data.text}>
          {data.name} : {data.text}
        </li>
      );
    });
  }

  render() {
    console.log(this);
    return (
      <div>
        <ul className="list-group">{this.renderMessage()}</ul>
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
