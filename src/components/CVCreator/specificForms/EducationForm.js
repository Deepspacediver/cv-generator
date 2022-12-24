import React, { useState } from "react";
import EditableForm from "../../Utils/EditableForm";
import OngoingButton from "../../Utils/OngoingBtn";

const EducationForm = () => {
  const [formValues, setFormValues] = useState({
    school: "",
    major: "",
    timeStart: "",
    timeEnd: "",
    ongoingStatus: false,
    location: "",
  });

  const { school, major, timeStart, timeEnd, location, ongoingStatus } =
    formValues;

  const handleChange = (e) => {
    const target = e.target;
    const editedInput = target.name;
    setFormValues({
      ...formValues,
      [editedInput]: target.value,
    });
  };

  const handleOngoing = () => {
    setFormValues({
      ...formValues,
      ongoingStatus: !ongoingStatus,

      //Set timeEnd based on the next ongoingStatus
      timeEnd: !ongoingStatus ? "Ongoing" : "",
    });
  };

  const formChildren = (
    <>
      <label htmlFor="school">
        <input
          name="school"
          type="text"
          value={school}
          onChange={handleChange}
          placeholder="School"
        />
      </label>
      <label htmlFor="major">
        <input
          name="major"
          type="text"
          value={major}
          onChange={handleChange}
          placeholder="Title of the study"
        />
      </label>
      <label htmlFor="timeStart">
        From
        <input
          name="timeStart"
          className="date-start-input"
          type="date"
          value={timeStart}
          onChange={handleChange}
        />
      </label>
      <div className="dates-end-form">
        <label htmlFor="timeEnd">
          To
          <input
            name="timeEnd"
            className="date-end-input"
            type="date"
            value={!ongoingStatus ? timeEnd : ""}
            disabled={ongoingStatus}
            onChange={handleChange}
          />
        </label>
        <OngoingButton
          handleOngoing={handleOngoing}
          ongoingStatus={ongoingStatus}
        />
      </div>
      <label htmlFor="location">
        <input
          name="location"
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Location"
        />
      </label>
    </>
  );

  const previewChildren = (
    <>
      <h4 className="school-name">{school ? school : "School Name"}</h4>
      <p className="major">{major ? major : "Title of the study"}</p>
      <div className="dates-container-preview">
        <p className="date-start">{timeStart ? timeStart : "Start Date"}</p>
        <p className="date-end">{timeEnd ? timeEnd : "End Date"}</p>
      </div>
      <p className="location">{location ? location : "Location"}</p>
    </>
  );

  return (
    <EditableForm
      formClass="education form"
      previewClass="education preview"
      formChildren={formChildren}
      previewChildren={previewChildren}
    />
  );
};

export default EducationForm;
