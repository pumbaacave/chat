import React, { Component } from "react";
import { connect } from "react-redux";
import { channelJoin, pushHistory } from "../actions/index";
import { bindActionCreators } from "redux";

class ChatBar extends Component {
  componentDidMount() {
    this.props.dispatch(channelJoin(this.props.dispatch));
  }
  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this);
    console.log(event.target);
    let payload = {
      name: event.target.name.value,
      text: event.target.text.value
    };
    console.log(payload);
    this.props.channel.push("shout", payload);
    this.props.dispatch(pushHistory(payload));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <div className="col-xs-3">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name"
              autoFocus
            />
          </div>

          <div className="col-xs-9">
            <input
              type="text"
              id="msg"
              name="text"
              className="form-control"
              placeholder="Your Message"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ ChannelData }) {
  return { channel: ChannelData.channel };
}

export default connect(
  mapStateToProps
  //{ pushHistory } // mapDispatchToProps
)(ChatBar);
