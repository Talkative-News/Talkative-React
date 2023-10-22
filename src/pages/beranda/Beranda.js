// Beranda.js
import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Headline from '../../components/headline/Headline';
import ContentBeranda from '../../components/content/contentBeranda/ContentBeranda';

function Beranda() {
    return (
        <div>
            <NavBar />
            <Headline />
            <ContentBeranda />
        </div>
    );
}

export default Beranda;
