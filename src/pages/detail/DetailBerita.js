import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataBeritaTrending from '../../data/DataBeritaTrending';
import dataBeritaTerkini from '../../data/DataBeritaTerkini';
import NavBar from '../../components/navBar/NavBar';
import HeadlineDetail from './../../components/headline/HeadlineDetail';
import './detailBeritaStyle.css';

function DetailBerita() {
    const { articleId } = useParams();
    const beritaTrending = dataBeritaTrending.find((article) => article.id === parseInt(articleId));
    const beritaTerkini = dataBeritaTerkini.find((article) => article.id === parseInt(articleId));

    let selectedArticle = beritaTrending || beritaTerkini;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!selectedArticle) {
        return <div>Article not found</div>;
    }

    const isiBeritaHtml = { __html: selectedArticle.isiBerita };

    return (
        <div id='detailBerita'>
            <NavBar />
            <HeadlineDetail
                backgroundBerita={selectedArticle.backgroundBerita}
                label={selectedArticle.label}
                judul={selectedArticle.judul}
                tanggal={selectedArticle.tanggal}
                penulis={selectedArticle.penulis}
            />
            <div className='isiBerita' dangerouslySetInnerHTML={isiBeritaHtml} />
        </div>
    );
}

export default DetailBerita;
