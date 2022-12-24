import React from "react";

const OngoingButton = ({ handleOngoing, ongoingStatus = false }) => (
  <label htmlFor="ongoing">
    Ongoing
    <input
      checked={ongoingStatus}
      name="ongoing"
      onChange={handleOngoing}
      type="checkbox"
    ></input>
  </label>
);

export default OngoingButton;
