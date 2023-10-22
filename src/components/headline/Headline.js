import React from 'react';
import './headlineStyle.css'
import Cover from '../../images/headlineCover.png'

function Headline() {
    return (
        <div id='headlineContainer'>
            <div id='headlineTopShadow' />
            <div id='headlineCover'>
                <img src={ Cover } alt='Cover Headline'/>
            </div>
            <div id='headlineBottomShadow' />
            <div id='headlineContent'>
                <div id='contentLeft'>
                    <h2>BREAKING NEWS</h2>
                    <h1>KASUS PEMBUNUHAN</h1>
                    <p>Penemuan mayat di Hutan Arizona, Kalimantan Utara. Dugaan sementara pembunuhan terencana.</p>
                    <p>21 Oktober 2023</p>
                </div>
                <div id='contentRight'>
                    <p>Lihat Selengkapnya</p>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    );
}

export default Headline;