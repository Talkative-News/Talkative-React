import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Beranda from './pages/beranda/Beranda';
import DetailBerita from "./pages/detail/DetailBerita";
import LoginAdmin from "./pages/adminLogin/LoginAdmin";
import AdminHome from "./pages/adminPage/AdminHome";
import FormTambahArtikel from "./pages/addArticle/FormTambahArtikel";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/beranda" />} />
                <Route path="/about" element={<Beranda />} />
                <Route path="/beranda" element={<Beranda />} />
                <Route path="/berita/:articleId" element={<DetailBerita />} />
                <Route path="/login" element={<LoginAdmin />} />
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/form-tambah-artikel" element={<FormTambahArtikel />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);