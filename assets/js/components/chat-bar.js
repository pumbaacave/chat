import React, { Component } from "react";
import { connect } from "react-redux";

class ChatBar extends Component {

  handleOnSubmit(event) {
    console.log(event);
    this.props.channel.push(
      "shout", {
        name: event.name,
        text: event.text
      }
    );
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleOnSubmit.bind(this)}>
            <div className="col-xs-3">
              <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" autoFocus />
            </div>

            <div className="col-xs-9">
              <input type="text" id="msg" name="text" className="form-control" placeholder="Your Message" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {channel: state.channel};
}

export default connect(mapStateToProps, null)(ChatBar);
