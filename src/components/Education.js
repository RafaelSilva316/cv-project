import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: "",
      name: "",
      to: "",
      from: "",
      city: "",
      description: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.props.editMode);
    const { name, degree, to, from, city, description } = this.state;
    if (!this.props.editMode) {
      return (
        <div className="gen-info-box">
          <p>School Name: {name}</p>
          <p>Degree: {degree}</p>
          <p>From: {from}</p>
          <p>To: {to}</p>
          <p>City: {city}</p>
          <p>Description: {description}</p>
        </div>
      );
    } else {
      return (
        <form className="gen-info-form">
          <button
            className="delete-btn"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            X
          </button>
          <div>
            <label>School Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>From</label>
            <input
              name="from"
              type="number"
              value={from}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>To</label>
            <input
              name="to"
              type="number"
              value={to}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <div>
              <label>Degree/Certification/Accomplishment</label>
              <input
                type="text"
                name="degree"
                value={degree}
                onChange={this.handleInputChange}
              />
            </div>
            <label>Additional Description</label>
            <textarea
              value={description}
              name="description"
              onChange={this.handleInputChange}
            ></textarea>
          </div>
        </form>
      );
    }
  }
}

export default Education;
