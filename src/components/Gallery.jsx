//Imort components from Image and NoResults
import React from "react";
// import Image from "./Image";
import NoResults from "./NoResults";
// import Nav from "./Nav";

const Gallery = ({ pictures, title }) => {
  //If array is equal to 0 check for the next picture
  if (pictures.length === 0) {
    return <NoResults />;
  }

  //Use return to render images
  return (
    <div className="photo-container">
      <h2>{title}</h2>
      {/**Results*/}
      <ul>
        {pictures.map(picture => (
          <li key={picture.id}>
            <img
              src={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
              alt="flickr img"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
