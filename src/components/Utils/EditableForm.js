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
    const {
      formChildren,
      previewChildren,
      filterEmptyItems,
      formClass,
      previewClass,
    } = this.props;
    return isEditing ? (
      <form
        className={formClass}
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
      <div className={previewClass}>
        {previewChildren}
        <button className="edit-btn" onClick={this.handleEditing}>
          Edit
        </button>
      </div>
    );
  }
}

export default EditableForm;
