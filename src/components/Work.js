import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responsibilities: "",
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
    const { name, responsibilities, to, from, city, description } = this.state;
    if (!this.props.editMode) {
      return (
        <div className="gen-info-box">
          <p>Employer: {name}</p>

          <p>From: {from}</p>
          <p>To: {to}</p>
          <p>City: {city}</p>
          <p>Responsibilities: {responsibilities}</p>
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
            <label>Employer</label>
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
            <label>Responsibilities</label>
            <textarea
              value={responsibilities}
              name="responsibilities"
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <div>
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

export default Work;
