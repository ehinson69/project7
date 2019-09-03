import React from "react";

// no image results found
const NoResults = props => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>Sorry, we couldn't find any results matching your search query.</p>
    </li>
  );
};

export default NoResults;
