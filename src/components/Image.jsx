import React from "react";

const Image = props => {
  return (
    <li>
      <img src={props.url} alt={props.title} />
    </li>
  );
}

export default Image;