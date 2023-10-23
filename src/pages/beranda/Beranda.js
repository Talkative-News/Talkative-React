import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Headline from '../../components/headline/Headline';
import ContentBeranda from '../../components/content/contentBeranda/ContentBeranda';
import Footer from '../../components/footer/Footer';

function Beranda() {
    return (
        <div>
            <NavBar />
            <Headline />
            <ContentBeranda />
            <Footer />
        </div>
    );
}

export default Beranda;
