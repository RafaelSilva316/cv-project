import React, { Component } from "react";
import Work from "./Work";
import uniqid from "uniqid";

class WorkSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: this.props.editMode,
      workForms: [],
    };
  }

  addWorkHandler = () => {
    this.setState((prevState) => ({
      workForms: [...prevState.workForms, uniqid()],
    }));
  };

  handleDelete = (itemId) => {
    const newWorkForms = this.state.workForms.filter((formId) => {
      return formId !== itemId;
    });
    this.setState({ workForms: newWorkForms });
  };

  render() {
    return (
      <div className="gen-info-box work-section">
        <h2>Employment History</h2>
        {this.state.workForms.map((workForm) => {
          return (
            <Work
              key={workForm}
              id={workForm}
              onDelete={this.handleDelete}
              editMode={this.props.editMode}
            />
          );
        })}
        {this.props.editMode && (
          <button onClick={this.addWorkHandler}>+ Employment</button>
        )}
      </div>
    );
  }
}

export default WorkSection;
