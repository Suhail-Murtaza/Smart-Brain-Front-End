import React from "react";

const Rank = ({name,entries}) => {
  return (
    <div className="ma0">
      <div className="f3 white ma0 pb3">{`${name} , your current entry count is ${entries}`}</div>
    </div>
  );
};

export default Rank;
