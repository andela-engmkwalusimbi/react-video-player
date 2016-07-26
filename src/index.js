import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.jsx';

const API_KEY = 'AIzaSyAZkqEAm1Gg5blDlrvUjbEBjdWyEtkE-i0';

ReactDOM.render(
    <div>
        <SearchBar />
    </div>,
    document.querySelector('.container')
);