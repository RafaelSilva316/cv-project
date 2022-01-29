import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: 5555555,
      bio: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { name, email, phone, bio } = this.state;
    if (!this.props.editMode) {
      return (
        <div className="gen-info-box">
          <h2>Gen Info</h2>
          <p>Name: {name}</p>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
          <p>bio: {bio}</p>
        </div>
      );
    } else {
      return (
        <form className="gen-info-form">
          <h2>Gen Info</h2>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={this.handleInputChange}
              name="email"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              name="phone"
              type="number"
              value={phone}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Bio</label>
            <textarea
              value={bio}
              name="bio"
              onChange={this.handleInputChange}
            ></textarea>
          </div>
        </form>
      );
    }
  }
}

export default GeneralInfo;
