import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.placeHolder,
    };
  }

  toggleEditing = () => {
    this.setState((prevState) => ({
      ...prevState,
      isEditing: !prevState.isEditing,
    }));
  };

  handleValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { isEditing, value } = this.state;
    const { placeHolder, name, id, type = "text" } = this.props;
    return !isEditing && value ? (
      <p onClick={this.toggleEditing}>{value}</p>
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={this.handleValueChange}
        autoFocus
        onBlur={this.toggleEditing}
      />
    );
  }
}
export default Input;
