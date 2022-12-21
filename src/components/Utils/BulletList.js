import { Component } from "react";

class BulletList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletPoints: this.props.bulletPoints,
    };
  }

  render() {
    const { bulletPoints, addBulletItem, editBulletPoint } = this.props;
    const bulletEditable = (
      <div className="bullet-point-edit-container">
        {bulletPoints.map((obj, i) => {
          return (
            <textarea
              key={obj.id}
              className="bullet-point"
              // key={obj.id}
              data-id={obj.id}
              value={obj.responsibility}
              onChange={(e) => editBulletPoint(i, e)}
              placeholder="Your achievements/responsibilities"
              name={"bullet-point-" + i}
            ></textarea>
          );
        })}
        <button
          className="add-btn achievement"
          type="button"
          onClick={addBulletItem}
        >
          &#x2B; Responsibility
        </button>
      </div>
    );
    return bulletEditable;
  }
}

export default BulletList;
