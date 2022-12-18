import { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
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
    const { isEditing, name, title, location, email, phone, introduction } =
      this.state;
    return isEditing ? (
      <form>
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="title">
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="location">
          <input
            name="location"
            type="text"
            value={location}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="phone">
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={this.handleChange}
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
          ></textarea>
        </label>
      </form>
    ) : (
      <div id="general-info">
        <h1 id="name">{name}</h1>
      </div>
    );
  }
}

export default GeneralInfo;
