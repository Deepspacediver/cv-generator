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
    const { FormComponent } = this.props;
    return (
      <div>
        {formList.map((obj) => {
          return (
            <div key={obj.id}>
              {obj.form}
              <button data-id={obj.id} onClick={this.deleteForm}>
                Delete me
              </button>
            </div>
          );
        })}
        <button onClick={() => this.addForm(<FormComponent />)}>AddForm</button>
      </div>
    );
  }
}

export default CVSection;
