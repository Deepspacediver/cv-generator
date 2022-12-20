import { Component } from "react";
import EditableForm from "../../Utils/EditableForm";
import OngoingButton from "../../Utils/OngoingBtn";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      major: "",
      timeStart: "",
      timeEnd: "",
      ongoigStatus: false,
      location: "",
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

  render() {
    const { school, major, timeStart, timeEnd, location, ongoingStatus } =
      this.state;
    const formContent = (
      <>
        <label htmlFor="school">
          <input
            name="school"
            type="text"
            value={school}
            onChange={this.handleChange}
            placeholder="School"
          />
        </label>
        <label htmlFor="major">
          <input
            name="major"
            type="text"
            value={major}
            onChange={this.handleChange}
            placeholder="Major/Title of the study"
          />
        </label>
        <label htmlFor="timeStart">
          <input
            name="timeStart"
            type="date"
            value={timeStart}
            onChange={this.handleChange}
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
      </>
    );

    const previewContent = (
      </* className="education-info" */>
        <h4 className="school-name">{school ? school : "School Name"}</h4>
        <p className="major">{major ? major : "Major/Title of the study"}</p>
        <p className="date-start">{timeStart ? timeStart : "Start Date"}</p>
        <p className="date-end">{timeEnd ? timeEnd : "End Date"}</p>
        <p className="location">{location ? location : "Location"}</p>
      </>
    );

    return (
      <EditableForm
        formClass="education-form"
        previewClass="education-preview"
        formChildren={formContent}
        previewChildren={previewContent}
      />
    );
  }
}

export default EducationForm;
