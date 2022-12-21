import { Component } from "react";
import EditableForm from "../../Utils/EditableForm";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      location: "",
      email: "",
      phone: "",
      introduction: "",
    };
  }
  handleChange = (e) => {
    const target = e.target;
    console.log(target.name);
    const editedInput = target.name;
    this.setState({
      [editedInput]: target.value,
    });
  };

  render() {
    const { name, title, location, email, phone, introduction } = this.state;
    const formContent = (
      <>
        <label id="full-name-label" htmlFor="name">
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            placeholder="Job title"
          />
        </label>
        <label htmlFor="location">
          <input
            name="location"
            id="location-input"
            type="text"
            value={location}
            onChange={this.handleChange}
            placeholder="Location"
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            id="email-input"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </label>
        <label htmlFor="phone">
          <input
            name="phone"
            id="phone-input"
            type="tel"
            value={phone}
            onChange={this.handleChange}
            placeholder="Phone number"
          />
        </label>
        <label htmlFor="introduction">
          <textarea
            name="introduction"
            id="intrudcintroductiontion-input"
            value={introduction}
            onChange={this.handleChange}
            placeholder="Your description"
          ></textarea>
        </label>{" "}
      </>
    );

    const previewContent = (
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
        formChildren={formContent}
        previewChildren={previewContent}
      />
    );
  }
}

export default GeneralForm;
