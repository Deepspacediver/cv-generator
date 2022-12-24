import React from "react";

const BulletList = ({ bulletPoints, handleAddBullet, handleEditBullet }) => {
  return (
    <div className="bullet-point-edit-container">
      {bulletPoints.map((obj, i) => {
        return (
          <textarea
            key={obj.id}
            className="bullet-point"
            // key={obj.id}
            data-id={obj.id}
            value={obj.responsibility}
            onChange={(e) => handleEditBullet(i, e.target.value)}
            placeholder="Your achievements/responsibilities"
            name={"bullet-point-" + i}
          ></textarea>
        );
      })}
      <button
        className="add-btn achievement"
        type="button"
        onClick={() => {
          handleAddBullet();
        }}
      >
        &#x2B; Responsibility
      </button>
    </div>
  );
};

export default BulletList;
