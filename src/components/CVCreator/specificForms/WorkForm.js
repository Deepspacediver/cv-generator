import { Component } from "react";
import EditableForm from "../../Utils/EditableForm";
import OngoingButton from "../../Utils/OngoingBtn";
import BulletList from "../../Utils/BulletList";
import uniqid from "uniqid";

class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      timeStart: "",
      timeEnd: "",
      ongoigStatus: false,
      location: "",
      responsibilities: [{ responsibility: "Responsibility", id: uniqid() }],
    };
  }
  handleChange = (e) => {
    const target = e.target;
    console.log(target.value, typeof target.value);
    const editedInput = target.name;
    this.setState({
      [editedInput]: target.value,
    });
  };

  toggleOngoing = (e) => {
    const checkedStatus = e.target.checked;
    this.setState({
      ongoingStatus: checkedStatus,
      timeEnd: checkedStatus ? "Ongoing" : "",
    });
  };

  addBulletItem = () => {
    this.setState({
      responsibilities: [
        ...this.state.responsibilities,
        { responsibility: "", id: uniqid() },
      ],
    });
  };

  filterEmptyItems = () => {
    this.setState({
      responsibilities: this.state.responsibilities.filter(
        (el, i) => el.responsibility !== "" || i === 0
      ),
    });
  };

  editBulletPoint = (index, e) => {
    const respCopy = [...this.state.responsibilities];
    respCopy[index].responsibility = e.target.value;
    this.setState({
      responsibilities: respCopy,
    });
  };

  render() {
    const {
      company,
      position,
      timeStart,
      timeEnd,
      location,
      ongoingStatus,
      responsibilities,
    } = this.state;
    const formContent = (
      <div>
        <label htmlFor="company">
          <input
            name="company"
            type="text"
            value={company}
            onChange={this.handleChange}
            placeholder="Company Name"
          />
        </label>
        <label htmlFor="position">
          <input
            name="position"
            type="text"
            value={position}
            onChange={this.handleChange}
            placeholder="Position"
          />
        </label>
        <label htmlFor="timeStart">
          <input
            name="timeStart"
            type="date"
            value={timeStart}
            onChange={this.handleChange}
            // placeholder="Email"
          />
        </label>
        <label htmlFor="timeEnd">
          <input
            name="timeEnd"
            type="date"
            value={!ongoingStatus ? timeEnd : ""}
            disabled={ongoingStatus}
            onChange={this.handleChange}
          />
        </label>
        <OngoingButton
          toggleOngoing={this.toggleOngoing}
          ongoingStatus={ongoingStatus}
        />
        <label htmlFor="location">
          <input
            name="location"
            type="text"
            value={location}
            onChange={this.handleChange}
            placeholder="Location"
          />
        </label>
        <BulletList
          bulletPoints={responsibilities}
          addBulletItem={this.addBulletItem}
          editBulletPoint={this.editBulletPoint}
        />
      </div>
    );

    const previewContent = (
      <div className="education-info">
        <h4 className="company-name">{company ? company : "Company"}</h4>
        <p className="position">{position ? position : "Position"}</p>
        <p>{timeStart ? timeStart : "Start Date"}</p>
        <p>{timeEnd ? timeEnd : "End Date"}</p>
        <p>{location ? location : "Location"}</p>

        <ul>
          {responsibilities.map((obj) => (
            <li key={obj.id}>{obj.responsibility}</li>
          ))}
        </ul>
      </div>
    );

    return (
      <EditableForm
        formChildren={formContent}
        previewChildren={previewContent}
        filterEmptyItems={this.filterEmptyItems}
      />
    );
  }
}

export default WorkForm;
