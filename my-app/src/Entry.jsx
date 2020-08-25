import React from "react";

function Entry(props) {
  return (
    <div className="">
      <dt>
        <span className="" role="" aria-label="">
          {props.icon}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
