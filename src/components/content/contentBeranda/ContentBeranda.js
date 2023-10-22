import React from 'react';
import { Link } from 'react-router-dom';
import './contentBerandaStyle.css'
import dataBeritaTrending from '../../../data/DataBeritaTrending'

function ContentBeranda() {
    return (
        <div id='contentBeranda'>
            <div id='dominantContent'>
                <div id='sectionTitle'>
                    <h3>Berita Trending</h3>
                    <div />
                </div>
                {dataBeritaTrending.map((berita) => (
                    <Link to={`/berita/${berita.id}`} className="contentBerita" key={berita.id}>
                        <div className="beritaLeft">
                            <img src={berita.coverBerita} alt="Cover Berita" />
                        </div>
                        <div className="beritaRight">
                            <h5 className="labelBerita">{berita.label}</h5>
                            <h4>{berita.judul}</h4>
                            <p>{berita.deskripsi}</p>
                        </div>
                    </Link>
                ))}
                <div id='sectionTitle'>
                    <h3>Berita Terkini</h3>
                    <div />
                </div>
                {dataBeritaTrending.map((berita) => (
                    <Link to={`/berita/${berita.id}`} className="contentBerita wl" key={berita.id}>
                        <div className="beritaLeft">
                            <img src={berita.coverBerita} alt="Cover Berita" />
                        </div>
                        <div className="beritaRight">
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

                <div id='sectionTitle'>
                    <h3>Iklan Baris</h3>
                    <div />
                </div>
            </div>
        </div>
    );
}

export default ContentBeranda;