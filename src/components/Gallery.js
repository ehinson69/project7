//imort components from image and Noresults
import React from "react";
import Image from "./Image";
import NoResults from "./NoResults";

const Gallery = ({ pictures, query }) => {
    let pics;
    //if array is greater than 0 check for the next pic
    if (pictures.length > 0) {
        pics = pictures.map(pic => (
            <Image
                garden={pic.garden}
                server={pic.server}
                id={pic.id}
                secret={pic.secret}
                key={pic.id}
                title={pic.title}
            />
        ));
    } else {
       pics = <NoResults />
    };

    let searchWord;
    // show string
    if (query.length > 0) {
        searchWord = `Image results for: "${query}"`
    } else {
        searchWord = '';
    };

    //use return to render images
    return (
        <div className="photo-container">
           <h2>{searchWord}</h2>
           <ul>{pics}</ul>
        </div>
    );
};

export default Gallery;