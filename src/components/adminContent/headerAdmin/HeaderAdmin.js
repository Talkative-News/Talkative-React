import React from 'react'
import './headerAdmin.css'
import NavBar from '../../navBar/NavBar'

function HeaderAdmin(){

  const userRole = localStorage.getItem('role');
  const loggedUser = localStorage.getItem('name');
  const roleText = userRole === 'super-admin' ? 'Super Admin' : 'Administrator';

  return (
    <div className='container'>
        <NavBar/>
        <div className='headerImg'>

        </div>
        <div className='labelAdmin'>
            <span> {roleText} </span>
        </div>
        <div className='greeting'>
            <span>Halo, {loggedUser}</span>
        </div>
        <div className='greeting-text'>
            <span>Pada halaman ini, Anda dapat melakukan perubahan & penambahan berita,
pengelolaan situs dan penghapusan konten.</span>
        </div>
        {/* <div className='logout-btn'>
          <button onClick={()=>handleSignOut}> Sign Out </button>
        </div> */}
        
       
    </div>
  )
}

export default HeaderAdmin
