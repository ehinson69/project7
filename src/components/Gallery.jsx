//imort components from image and Noresults
import React from "react";
import Image from "./Image";
import NoResults from "./NoResults";

const Gallery = props => {
    const results = props.data;
    let pics;

    //if array is greater than 0 check for the next pic
    if (results.length > 0) {
        pics = results.map(pic => <Image url={'https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg'} key={picture.id}/>;
    } else {
        pics = <NoResults />
    }

    //use return to render images
    return (
        <div className="photo-container">
           <h2>{props.match.params.name}</h2>
           <ul>{pics}</ul>
        </div>
    );
};

export default Gallery;