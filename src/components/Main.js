import React from "react";
import CVSection from "./CVCreator/CVSection";
import GeneralForm from "./CVCreator/specificForms/GeneralForm";
import EducationForm from "./CVCreator/specificForms/EducationForm";
import WorkForm from "./CVCreator/specificForms/WorkForm";

const Main = () => (
  <main>
    <GeneralForm />
    <CVSection FormComponent={EducationForm} formName="Education" />
    <CVSection FormComponent={WorkForm} formName="Experience" />
  </main>
);

export default Main;
