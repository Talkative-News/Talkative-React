import React from 'react'
import './newsList.css'
import dataBeritaTrending from '../../../data/DataBeritaTrending'

function NewsManagement(){
  return (
    <div className='container'>
        <div className='newsContainer'>
                <div className='titleAdmin'>
                    <span>Daftar Berita Talkative</span>
                </div>
                <div className='hr'></div>
            {    dataBeritaTrending.map((berita)=>(
                        <div className='news-box'>
                            <div className='news-img'>
                                <img src={berita.coverBerita} alt=''></img>
                            </div>
                            <div className='news-title'>
                                <span>{berita.judul}</span>
                            </div>
                            <div className='news-content'>
                                <span>{berita.deskripsi}</span>
                            </div>
                    </div>
            ))}
        
        </div>
        
    </div>
  )
}

export default NewsManagement