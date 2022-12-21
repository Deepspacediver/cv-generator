import { Component } from "react";

class OngoingButton extends Component {
  render() {
    const { toggleOngoing, ongoingStatus = false } = this.props;
    return (
      <label htmlFor="ongoing">
        Ongoing
        <input
          checked={ongoingStatus}
          name="ongoing"
          onChange={toggleOngoing}
          type="checkbox"
        ></input>
      </label>
    );
  }
}

export default OngoingButton;
