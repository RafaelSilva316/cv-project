import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import EducationSection from "./components/EducationSection";
import WorkSection from "./components/WorkSection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
    };

    this.handleEditMode = this.handleEditMode.bind(this);
    this.handlePreviewMode = this.handlePreviewMode.bind(this);
  }

  handleEditMode() {
    this.setState({
      editMode: true,
    });
  }

  handlePreviewMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          className="Header"
          onEditMode={this.handleEditMode}
          onPreviewMode={this.handlePreviewMode}
        />
        <GeneralInfo editMode={this.state.editMode} />
        <WorkSection editMode={this.state.editMode} />
        <EducationSection editMode={this.state.editMode} />
      </div>
    );
  }
}

export default App;
