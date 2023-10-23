import React from 'react'
import HeaderAdmin from '../../components/adminContent/headerAdmin/HeaderAdmin'
// import NavBar from '../../components/navBar/NavBar'
import AdminManagement from '../../components/adminContent/adminList/AdminManagement'
import NewsManagement from '../../components/adminContent/newsList/NewsManagement'
import Footer from '../../components/footer/Footer';
import './admin.css'

function AdminHome() {
  return (
    <div>
        <HeaderAdmin/>
        <div className='admin-content'>
          <div className='admin-manage'>
              <AdminManagement/>
          </div>
          <div className='news-manage'>
              <NewsManagement/>
          </div>
        </div>
       
        <div className='footer'>
             <Footer/>
        </div> 
       
    </div>
  )
}

export default AdminHome