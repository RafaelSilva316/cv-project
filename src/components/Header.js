import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <button onClick={() => this.props.onEditMode()}>Edit</button>
        <button onClick={() => this.props.onPreviewMode()}>Preview</button>
      </nav>
    );
  }
}

export default Header;
