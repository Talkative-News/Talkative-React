import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Beranda from './pages/beranda/Beranda';
import DetailBerita from "./pages/detail/DetailBerita";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/beranda" />} />
                <Route path="/beranda" element={<Beranda />} />
                <Route path="/berita/:articleId" element={<DetailBerita />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);