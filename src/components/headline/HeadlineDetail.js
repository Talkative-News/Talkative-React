import React from 'react';
import './headlineStyle.css'

function HeadlineDetail(props) {
    const { backgroundBerita, label, judul, tanggal } = props;
    return (
        <div id='headlineContainer'>
            <div id='headlineTopShadow' />
            <div id='headlineCover'>
                <img src={ backgroundBerita } alt='Cover Headline'/>
            </div>
            <div id='headlineBottomShadow' />
            <div id='headlineContent'>
                <div id='contentLeft'>
                    <h2>{label}</h2>
                    <h1 className='titleDetail'>{judul}</h1>
                    <p className='dateDetail'>{tanggal}</p>
                </div>
            </div>
        </div>
    );
}

export default HeadlineDetail;