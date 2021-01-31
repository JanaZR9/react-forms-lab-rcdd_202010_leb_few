import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super(props);

    this.state = {
      message : ''
    };
  }

 handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
     let charNb = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
