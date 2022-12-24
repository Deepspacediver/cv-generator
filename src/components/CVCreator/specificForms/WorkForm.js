import React, { useState } from "react";
import EditableForm from "../../Utils/EditableForm";
import OngoingButton from "../../Utils/OngoingBtn";
import BulletList from "../../Utils/BulletList";
import uniqid from "uniqid";

const WorkForm = () => {
  const [formValues, setFormValues] = useState({
    company: "",
    position: "",
    timeStart: "",
    timeEnd: "",
    ongoigStatus: false,
    location: "",
  });

  const [responsibilityList, setResponsibilityList] = useState([
    { responsibility: "Responsibility", id: uniqid() },
  ]);

  const handleChange = (e) => {
    const target = e.target;
    const editedInput = target.name;
    setFormValues({
      ...formValues,
      [editedInput]: target.value,
    });
  };

  const handleOngoing = () => {
    console.log(ongoingStatus);
    setFormValues({
      ...formValues,
      ongoingStatus: !ongoingStatus,

      //Set timeEnd based on the next ongoingStatus
      timeEnd: !ongoingStatus ? "Ongoing" : "",
    });
  };

  const handleAddBullet = () => {
    setResponsibilityList([
      ...responsibilityList,
      { responsibility: "", id: uniqid() },
    ]);
  };

  const handleFilterEmptyBullets = () => {
    setResponsibilityList(
      responsibilityList.filter((el, i) => el.responsibility !== "" || i === 0)
    );
  };

  const handleEditBullet = (index, value) => {
    setResponsibilityList(
      responsibilityList.map((el, i) => {
        if (i === index) return { ...el, responsibility: value };
        else return el;
      })
    );
  };

  const { company, position, timeStart, timeEnd, ongoingStatus, location } =
    formValues;

  const formChildren = (
    <>
      <label htmlFor="company">
        <input
          name="company"
          type="text"
          value={company}
          onChange={handleChange}
          placeholder="Company Name"
        />
      </label>
      <label htmlFor="position">
        <input
          name="position"
          type="text"
          value={position}
          onChange={handleChange}
          placeholder="Position"
        />
      </label>
      <label htmlFor="timeStart">
        From
        <input
          name="timeStart"
          type="date"
          value={timeStart}
          onChange={handleChange}
          // placeholder="Email"
        />
      </label>
      <div className="dates-end-form">
        <label htmlFor="timeEnd">
          To
          <input
            name="timeEnd"
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
      <BulletList
        bulletPoints={responsibilityList}
        handleAddBullet={handleAddBullet}
        handleEditBullet={handleEditBullet}
      />
    </>
  );

  const previevChildren = (
    <>
      <h4 className="company-name">{company ? company : "Company"}</h4>
      <p className="position">{position ? position : "Position"}</p>
      <div className="dates-container-preview">
        <p className="date-start">{timeStart ? timeStart : "Start Date"}</p>
        <p className="date-end">{timeEnd ? timeEnd : "End Date"}</p>
      </div>
      <p className="location">{location ? location : "Location"}</p>

      <ul className="bullet-point-preview-container">
        {" "}
        Responsibilities:
        {responsibilityList.map((obj) => (
          <li className="bullet-point-preview-item" key={obj.id}>
            {obj.responsibility}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <EditableForm
      formClass="experience form"
      previewClass="experience preview"
      formChildren={formChildren}
      previewChildren={previevChildren}
      filterEmptyBullets={handleFilterEmptyBullets}
    />
  );
};

export default WorkForm;
