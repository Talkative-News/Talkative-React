import React from 'react'
import './adminList.css'

function AdminManagement(){
  return (
    <div className='container'>
        <div className='adminContainer'>
        <div className='titleAdmin'>
            <span>Data Administrator</span>
        </div>
        <div className='hr'></div>
        <div className='tableAdmin'>
           
            <table>
                <thead>
                    <th>Nama Admin</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Aksi</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Christina Andrea</td>
                        <td>christina.andrea@ti.ukdw.ac.id</td>
                        <td>*********</td>
                        <td>
                            <span>Ubah</span>
                            <span>Hapus</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Christina Andrea</td>
                        <td>christina.andrea@ti.ukdw.ac.id</td>
                        <td>*********</td>
                        <td>
                            <span>Ubah</span>
                            <span>Hapus</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        </div>
        
    </div>
  )
}

export default AdminManagement