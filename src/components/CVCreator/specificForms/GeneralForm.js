import React, { useState } from "react";
import EditableForm from "../../Utils/EditableForm";

const GeneralForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
    location: "",
    email: "",
    phone: "",
    introduction: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const editedInput = target.name;
    setFormValues({
      ...formValues,
      [editedInput]: target.value,
    });
  };

  const { name, title, location, email, phone, introduction } = formValues;
  const formChildren = (
    <>
      <label id="full-name-label" htmlFor="name">
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Full Name"
        />
      </label>
      <label htmlFor="title">
        <input
          name="title"
          id="title-input"
          className="aligned"
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Job title"
        />
      </label>
      <label htmlFor="location">
        <input
          name="location"
          id="location-input"
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Location"
        />
      </label>
      <label htmlFor="email">
        <input
          name="email"
          id="email-input"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>
      <label htmlFor="phone">
        <input
          name="phone"
          id="phone-input"
          type="tel"
          value={phone}
          onChange={handleChange}
          placeholder="Phone number"
        />
      </label>
      <label htmlFor="introduction">
        <textarea
          name="introduction"
          id="intrudcintroductiontion-input"
          value={introduction}
          onChange={handleChange}
          placeholder="Your description"
        ></textarea>
      </label>{" "}
    </>
  );

  const previewChildren = (
    <>
      <h2 id="full-name">{name ? name : "Full name"}</h2>
      <p className="title aligned">{title ? title : "Title"}</p>
      <p className="main-location aligned">
        {location ? location : "Location"}
      </p>
      <p className="email aligned">{email ? email : "Email"}</p>
      <p className="phone aligned">{phone ? phone : "Phone number"}</p>
      <div className="introduction-wrapper">
        <p className="introduction">
          {introduction ? introduction : "Introduction"}
        </p>
      </div>
    </>
  );

  return (
    <EditableForm
      formClass="general-info form"
      previewClass="general-info preview"
      formChildren={formChildren}
      previewChildren={previewChildren}
    />
  );
};

export default GeneralForm;
