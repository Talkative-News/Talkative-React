import React from 'react'
import './headerAdmin.css'
import NavBar from '../../navBar/NavBar'
function HeaderAdmin(){
  return (
    <div className='container'>
        <NavBar/>
        <div className='headerImg'>

        </div>
        <div className='labelAdmin'>
            <span> Administrator </span>
        </div>
        <div className='greeting'>
            <span>Halo, Christina Andrea</span>
        </div>
        <div className='greeting-text'>
            <span>Pada halaman ini, Anda dapat melakukan perubahan & penambahan berita,
pengelolaan situs dan penghapusan konten.</span>
        </div>

    </div>
  )
}

export default HeaderAdmin
