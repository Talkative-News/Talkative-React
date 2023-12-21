import React from 'react'
import './headerAdmin.css'
import backgroundHeadline from '../../../images/header/header-bg.png'

function HeaderAdmin(){

  const userRole = localStorage.getItem('role');
  const loggedUser = localStorage.getItem('name');
  const roleText = userRole === 'super-admin' ? 'Super Admin' : 'Administrator';

  return (
      <div id='headlineContainer'>
          <div id='headlineTopShadow' />
          <div id='headlineCover'>
              <img src={ backgroundHeadline } alt='Cover Headline' draggable='false'/>
          </div>
          <div id='headlineBottomShadow' />
          <div id='headlineContent'>
              <div id='contentLeft'>
                  <h2>{roleText}</h2>
                  <h1 className='titleDetail'>Halo, {loggedUser}</h1>
                  <p className='dateDetail'>Pada halaman ini, Anda dapat melakukan perubahan & penambahan berita,</p>
                  <p className='dateDetail'>pengelolaan situs dan penghapusan konten.</p>
              </div>
          </div>
      </div>
  )
}

export default HeaderAdmin
