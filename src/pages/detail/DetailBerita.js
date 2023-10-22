import React from 'react';
import { useParams } from 'react-router-dom';
import dataBeritaTrending from '../../data/DataBeritaTrending';
import NavBar from '../../components/navBar/NavBar';
import HeadlineDetail from './../../components/headline/HeadlineDetail';

function DetailBerita() {
    const { articleId } = useParams();
    const berita = dataBeritaTrending.find((article) => article.id === parseInt(articleId));

    if (!berita) {
        return <div>Article not found</div>;
    }

    return (
        <div>
            <NavBar />
            <HeadlineDetail
                backgroundBerita = {berita.backgroundBerita}
                label = {berita.label}
                judul = {berita.judul}
                tanggal = {berita.tanggal}
                penulis = {berita.penulis}
            />
            <p>{berita.isiBerita}</p>
        </div>
    );
}

export default DetailBerita;
