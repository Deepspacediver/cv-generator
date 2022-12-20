import { Component } from "react";

class OngoingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.ongoingStatus,
    };
  }

  render() {
    const { checked } = this.state;
    const { toggleOngoing } = this.props;
    return (
      <label htmlFor="ongoing">
        Ongoing
        <input
          checked={checked}
          name="ongoing"
          onChange={toggleOngoing}
          type="checkbox"
        ></input>
      </label>
    );
  }
}

export default OngoingButton;
