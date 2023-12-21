import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contentBerandaStyle.css';
import dataBeritaTerkini from './../../../data/DataBeritaTerkini';
import Weather from '../../../images/weather.png';
import Iklan1 from '../../../images/iklanAqua.png';
import Iklan2 from '../../../images/iklanSprite.png';
import Iklan3 from '../../../images/iklanMcD.png';

function ContentBeranda() {
    const [dataBeritaTrending, setDataBeritaTrending] = useState([]);
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=54e363d6785f4046895150210273a6d3'
            );
            const data = await response.json();
            const articles = data.articles.slice(0, 3);

            const formattedData = articles.map((article, index) => ({
                id: index + 1,
                coverBerita: article.urlToImage,
                label: article.source.name,
                judul: article.title,
                deskripsi: article.description,
                link: article.url,
            }));

            setDataBeritaTrending(formattedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

        fetchData();
    }, []);

    return (
        <div id='contentBeranda'>
            <div id='dominantContent'>
                <div id='sectionTitle'>
                    <h3>Berita Trending</h3>
                    <div />
                </div>
                    {dataBeritaTrending.length > 0 ? (
                        dataBeritaTrending.map((berita) => (
                            <Link to={{
                                pathname: `/berita/${berita.id}`,
                                state: { berita },
                            }} className='contentBerita' key={berita.id}>
                                <div className='beritaLeft'>
                                    <img src={berita.coverBerita} alt='Cover Berita' draggable='false' />
                                </div>
                                <div className='beritaRight'>
                                    <h5 className='labelBerita'>{berita.label}</h5>
                                    <h4>{truncateText(berita.judul, 70)}</h4>
                                    <p>{berita.deskripsi}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <>
                            <div className='contentBerita'>
                                <div className='beritaLeft'><div id='skeleton-img'/></div>  
                                <div className='beritaRight'><div id='skeleton-h5' /><div id='skeleton-h4' /><div id='skeleton-p' /><div id='skeleton-p' /></div>
                            </div>
                            <div className='contentBerita'>
                                <div className='beritaLeft'><div id='skeleton-img'/></div>  
                                <div className='beritaRight'><div id='skeleton-h5' /><div id='skeleton-h4' /><div id='skeleton-p' /><div id='skeleton-p' /></div>
                            </div>
                            <div className='contentBerita'>
                                <div className='beritaLeft'><div id='skeleton-img'/></div>  
                                <div className='beritaRight'><div id='skeleton-h5' /><div id='skeleton-h4' /><div id='skeleton-p' /><div id='skeleton-p' /></div>
                            </div>
                        </>
                    )}
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