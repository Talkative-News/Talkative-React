// Beranda.js
import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Headline from '../../components/headline/Headline';
import ContentBeranda from '../../components/content/contentBeranda/ContentBeranda';
import Footer from '../../components/footer/Footer';
import './beranda.css'
function Beranda() {
    return (
        <div>
            <NavBar />
            <Headline />
            <ContentBeranda />
            <div className='footer'>
                 <Footer />
            </div>
            
        </div>
    );
}

export default Beranda;
