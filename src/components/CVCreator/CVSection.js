import { Component } from "react";
import uniqid from "uniqid";

class CVSection extends Component {
  constructor(props) {
    super(props);
    const { FormComponent } = this.props;
    this.state = {
      formList: [
        {
          form: <FormComponent />,
          id: uniqid(),
        },
      ],
    };
  }
  addForm = (FormComponent) => {
    const updatedFormList = [
      ...this.state.formList,
      { form: FormComponent, id: uniqid() },
    ];
    this.setState({
      formList: updatedFormList,
    });
  };

  deleteForm = (e) => {
    const id = e.target.dataset.id;
    const updatedFormList = this.state.formList.filter((el) => el.id !== id);
    this.setState({
      formList: updatedFormList,
    });
  };

  render() {
    const { formList } = this.state;
    const { FormComponent, formName } = this.props;
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
                  onClick={this.deleteForm}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
        <button
          className={"add-btn " + formName.toLowerCase()}
          onClick={() => this.addForm(<FormComponent />)}
        >
          &#x2B; {formName}
        </button>
      </div>
    );
  }
}

export default CVSection;
