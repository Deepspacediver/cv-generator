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
    const { formChildren, previewChildren, filterEmptyItems } = this.props;
    return isEditing ? (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.handleEditing();
          if (filterEmptyItems) filterEmptyItems();
        }}
      >
        {formChildren}
        <button type="submit">Submit</button>
      </form>
    ) : (
      <div>
        {previewChildren}
        <button onClick={this.handleEditing}>Edit</button>
      </div>
    );
  }
}

export default EditableForm;
