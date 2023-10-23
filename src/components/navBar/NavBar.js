import React from 'react';
import { Link } from 'react-router-dom';
import './navBarStyle.css'
import Dot from '../../images/dotTalkative.png'


function NavBar() {
    return (
        <div id='navBarContainer'>
            <div id='navBarBg'>
                <div id='leftNavBar'>
                    <img src={ Dot } alt='Dot Talkative Logo' draggable='false'/>
                    <h1>Talkative</h1>
                </div>
                <div id='rightNavBar'>
                    <div className='menu'>
                        <Link to="/beranda" className='active'>Beranda</Link>
                        <a href='https://stackoverflow.com/' className='category'>Kategori</a>
                        <a href='https://stackoverflow.com/'>Diskusi</a>
                        <a href='https://stackoverflow.com/'>Tentang Kami</a>
                    </div>
                    <div className='searchBox'>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                        <span class="material-symbols-outlined">search</span>
                        <input type='text' placeholder='Cari Berita . . .'></input>
                    </div>
                </div>
            </div>
            <div id='popUpCategory'>
                <a href='https://stackoverflow.com/'>Olah raga</a>
                <a href='https://stackoverflow.com/'>Entertainment</a>
                <a href='https://stackoverflow.com/'>Keuangan</a>
                <a href='https://stackoverflow.com/'>Politik</a>
                <a href='https://stackoverflow.com/'>Gaya Hidup</a>
            </div>
        </div>
    );
}

export default NavBar;