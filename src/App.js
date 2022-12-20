import "./index.css";
import React, { Component } from "react";
import GeneralForm from "./components/CVCreator/specificForms/GeneralForm";
import CVSection from "./components/CVCreator/CVSection";
import EducationalForm from "./components/CVCreator/specificForms/EducationForm";
import WorkForm from "./components/CVCreator/specificForms/WorkForm";
class App extends Component {
  render() {
    return (
      <div>
        <CVSection FormComponent={GeneralForm} />
        <CVSection FormComponent={EducationalForm} />
        <CVSection FormComponent={WorkForm} />
      </div>
    );
  }
}

export default App;
