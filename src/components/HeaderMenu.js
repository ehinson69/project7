import React from 'react';

// Import components from search and Nav files
import Search from './Search';
import Nav from './Nav';

const HeaderMenu = ({ newSearch }) => {
    return (
        <div>
            <Search newSearch={newSearch} />
            <Nav />
        </div>
    )
};

export default HeaderMenu;