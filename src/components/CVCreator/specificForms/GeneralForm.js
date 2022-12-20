import { Component } from "react";
import EditableForm from "../../Utils/EditableForm";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      title: "Developer",
      location: "Planet Earth",
      email: "mymail@mail.com",
      phone: "123 456 789",
      introduction:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
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
        <label htmlFor="name">
          <input
            name="name"
            id="full-name-input"
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
            cols="5"
            rows="2"
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
        <p className="title aligned">{title}</p>
        <p className="location aligned">{location ? location : "Location"}</p>
        <p className="email aligned">{email ? email : "Email"}</p>
        <p className="phone aligned">{phone ? phone : "Phone number"}</p>
        <p className="introduction">
          {introduction ? introduction : "Introduction"}
        </p>
      </>
    );

    return (
      <EditableForm
        formClass="general-info-form"
        previewClass="general-info-preview"
        formChildren={formContent}
        previewChildren={previewContent}
      />
    );
  }
}

export default GeneralForm;
