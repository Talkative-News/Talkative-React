import React from 'react'
import HeaderAdmin from '../../components/adminContent/headerAdmin/HeaderAdmin'
// import NavBar from '../../components/navBar/NavBar'
import AdminManagement from '../../components/adminContent/adminList/AdminManagement'
import NewsManagement from '../../components/adminContent/newsList/NewsManagement'
import Footer from '../../components/footer/Footer';
import './admin.css'
import { useNavigate, Navigate } from 'react-router';
import NavBar from '../../components/navBar/NavBar';

function AdminHome() {
  // const navigate = useNavigate();
  const userRole = localStorage.getItem('role');
  const userName = localStorage.getItem('name');

  const navigate = useNavigate();

  const handleSignOut = () => {
    window.localStorage.clear(); 
    navigate('/login')
  }

  if (!userRole || !userName) {
    // Redirect the user or display an error message if 'role' or 'name' is missing in localStorage
    // Example: return <Redirect to="/login" />; // Redirect to the login page
    return <Navigate to="/login" />
  }

  return (
    <>
      <NavBar />
      <HeaderAdmin/>
        <div className='logout-btn'>
          <button onClick={handleSignOut}> Sign Out </button>
        </div>
        <div className='admin-content'>
            {userRole === 'super-admin' && (
          <div className='admin-manage'>
            <AdminManagement />
          </div>
        )}
        </div>
      <Footer/>
    </>
  )
}

export default AdminHome