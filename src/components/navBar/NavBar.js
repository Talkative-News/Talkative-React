import React from 'react';
import './navBarStyle.css'
import Dot from '../../images/dotTalkative.png'

function NavBar() {
    return (
        <div id='navBarContainer'>
            <div id='navBarBg'>
                <div id='leftNavBar'>
                    <img src={ Dot } alt='Dot Talkative Logo' />
                    <h1>Talkative</h1>
                </div>
                <div id='rightNavBar'>
                    <div className='menu'>
                        <a className='active' href='https://stackoverflow.com/'>Beranda</a>
                        <a href='https://stackoverflow.com/'>Kategori</a>
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
        </div>
    );
}

export default NavBar;