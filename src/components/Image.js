import React from "react";

const Image = ({ garden, server, id, secret, title }) => {
  return (
    <li>
      <img
        src={`https://garden${garden}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title} />
    </li>
  )
};

export default Image;