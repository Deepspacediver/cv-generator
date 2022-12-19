import React, { Component } from "react";

class EditableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  render() {
    const { isEditing } = this.state;
    const { formChildren, previewChildren } = this.props;
    return isEditing ? (
      <form>
        {formChildren}
        <button type="button" onClick={this.handleEditing}>
          Submit
        </button>
      </form>
    ) : (
      <div>
        {previewChildren}
        <button type="button" onClick={this.handleEditing}>
          Edit
        </button>
      </div>
    );
  }
}

export default EditableForm;
