import React from "react";

function Entry(props) {
  return (
    <div className="card">
      <dt>
        <img src={props.icon} className="circle-img"></img>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
