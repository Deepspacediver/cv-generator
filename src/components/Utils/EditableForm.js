import React, { useState } from "react";

const EditableForm = ({
  formClass,
  previewClass,
  filterEmptyBullets,
  formChildren,
  previewChildren,
}) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => setEditing(!editing);

  const content = editing ? (
    <form
      className={formClass}
      onSubmit={(e) => {
        e.preventDefault();
        handleEditing();
        if (filterEmptyBullets) filterEmptyBullets();
      }}
    >
      {formChildren}
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  ) : (
    <div className={previewClass}>
      {previewChildren}
      <button className="edit-btn" onClick={handleEditing}>
        Edit
      </button>
    </div>
  );

  return content;
};

export default EditableForm;
