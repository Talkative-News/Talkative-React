import React from 'react';
import { Link } from 'react-router-dom';
import './contentBerandaStyle.css';
import dataBeritaTrending from '../../../data/DataBeritaTrending';
import dataBeritaTerkini from './../../../data/DataBeritaTerkini';
import Weather from '../../../images/weather.png';
import Iklan1 from '../../../images/iklanAqua.png';
import Iklan2 from '../../../images/iklanSprite.png';
import Iklan3 from '../../../images/iklanMcD.png';

function ContentBeranda() {
    return (
        <div id='contentBeranda'>
            <div id='dominantContent'>
                <div id='sectionTitle'>
                    <h3>Berita Trending</h3>
                    <div />
                </div>
                {dataBeritaTrending.map((berita) => (
                    <Link to={`/berita/${berita.id}`} className='contentBerita' key={berita.id}>
                        <div className='beritaLeft'>
                            <img src={berita.coverBerita} alt='Cover Berita' draggable='false'/>
                        </div>
                        <div className='beritaRight'>
                            <h5 className='labelBerita'>{berita.label}</h5>
                            <h4>{berita.judul}</h4>
                            <p>{berita.deskripsi}</p>
                        </div>
                    </Link>
                ))}
                <div id='sectionTitle'>
                    <h3>Berita Terkini</h3>
                    <div />
                </div>
                {dataBeritaTerkini.map((berita) => (
                    <Link to={`/berita/${berita.id}`} className='contentBerita wl' key={berita.id}>
                        <div className='beritaLeft'>
                            <img src={berita.coverBerita} alt='Cover Berita' draggable='false'/>
                        </div>
                        <div className='beritaRight'>
                            <h4>{berita.judul}</h4>
                            <p>{berita.deskripsi}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div id='sideContent'>
                <div id='sectionTitle'>
                    <h3>Informasi Terkini</h3>
                    <div />
                </div>
                <div className='wheater'>
                    <img src={ Weather } alt='Weather' draggable='false'/>
                </div>
                <div id='sectionTitle'>
                    <h3>Iklan Baris</h3>
                    <div />
                </div>
                <div className='iklanBaris'>
                    <img src={ Iklan1 } alt='Iklan Baris Aqua' draggable='false'/>
                </div>
                <div className='iklanBaris'>
                    <img src={ Iklan2 } alt='Iklan Baris Sprite' draggable='false'/>
                </div>
                <div className='iklanBaris'>
                    <img src={ Iklan3 } alt='Iklan Baris McD' draggable='false'/>
                </div>
            </div>
        </div>
    );
}

export default ContentBeranda;