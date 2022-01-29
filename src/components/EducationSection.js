import React, { Component } from "react";
import Education from "./Education";
import uniqid from "uniqid";

class EducationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: this.props.editMode,
      educationForms: [],
    };
  }

  addEducationHandler = () => {
    console.log(this.props.editMode);
    this.setState((prevState) => ({
      educationForms: [...prevState.educationForms, uniqid()],
    }));
  };

  handleDelete = (itemId) => {
    const newEducationForms = this.state.educationForms.filter((formId) => {
      return formId !== itemId;
    });
    this.setState({ educationForms: newEducationForms });
  };

  render() {
    return (
      <div className="gen-info-box">
        <h2>Education</h2>
        {this.state.educationForms.map((edForm) => {
          return (
            <Education
              key={edForm}
              id={edForm}
              onDelete={this.handleDelete}
              editMode={this.props.editMode}
            />
          );
        })}
        {this.props.editMode && (
          <button onClick={this.addEducationHandler}>+ Education</button>
        )}
      </div>
    );
  }
}

export default EducationSection;
