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
      <div>
        <label htmlFor="name">
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
            type="text"
            value={title}
            onChange={this.handleChange}
            placeholder="Job title"
          />
        </label>
        <label htmlFor="location">
          <input
            name="location"
            type="text"
            value={location}
            onChange={this.handleChange}
            placeholder="Location"
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </label>
        <label htmlFor="phone">
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={this.handleChange}
            placeholder="Phone number"
          />
        </label>
        <label htmlFor="introduction">
          <textarea
            name="introduction"
            id=""
            cols="5"
            rows="2"
            value={introduction}
            onChange={this.handleChange}
            placeholder="Your description"
          ></textarea>
        </label>{" "}
      </div>
    );

    const previewContent = (
      <div id="general-info">
        <h1 id="name">{name ? name : "Full name"}</h1>
        <p id="title">{title}</p>
        <p>{location ? location : "Location"}</p>
        <p>{email ? email : "Email"}</p>
        <p>{phone ? phone : "Phone number"}</p>
        <p>{introduction ? introduction : "Introduction"}</p>
      </div>
    );

    return (
      <EditableForm
        formChildren={formContent}
        previewChildren={previewContent}
      />
    );
  }
}

export default GeneralForm;
