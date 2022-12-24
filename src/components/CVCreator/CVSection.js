import React, { useState } from "react";
import uniqid from "uniqid";

const CVSection = ({ FormComponent, formName }) => {
  const [formList, setFormList] = useState([
    {
      form: <FormComponent />,
      id: uniqid(),
    },
  ]);

  const addForm = (FormComponent) => {
    setFormList([...formList, { form: FormComponent, id: uniqid() }]);
  };

  const deleteForm = (e) => {
    const id = e.target.dataset.id;
    setFormList(formList.filter((el) => el.id !== id));
  };

  return (
    <div className={"cv-section " + formName.toLowerCase()}>
      <h2>{formName}</h2>
      {formList.map((obj, i) => {
        return (
          <div className={formName.toLowerCase() + "-container"} key={obj.id}>
            {obj.form}
            {i === 0 ? null : (
              <button
                className="remove-form-btn"
                data-id={obj.id}
                onClick={deleteForm}
              >
                Remove
              </button>
            )}
          </div>
        );
      })}
      <button
        className={"add-btn " + formName.toLowerCase()}
        onClick={() => addForm(<FormComponent />)}
      >
        &#x2B; {formName}
      </button>
    </div>
  );
};

export default CVSection;
