import React from 'react'
import Select from 'react-select'

//         'source':input_sumber,
//         'author': input_author,
//         'title': input_title,
//         'description': input_description,
//         'publishedAt': input_date,
//         'url': input_url,
//         'urlToImg': image_path,
//         'category' : input_category,
//         'content': input_content
const FormTambahArtikel = () => {

    const category = [
        {value : 'finance', label:'Finance'},
        {value : 'bussiness', label:'Bussiness'},
        {value : 'otomotive', label:'Otomotive'},
        {value : 'lifestyle', label:'Lifestyle'},
        {value : 'politics', label:'Politics'},
        {value : 'health', label:'Health'},
        {value : 'technology', label:'Technology'},
        {value : 'entertainment', label:'Entertainment'}
    ]


  return (
    <div>
        <div className='container-form-artikel'> 
            <form method='POST' enctype="multipart/form-data">
                <div className='subform-add-article'>
                    <label>Sumber</label> <br />
                    <input type='text' name="source"/>
                </div>
                <div className='subform-add-article'>
                    <label>Judul</label> <br />
                    <input type='text' name="title"/>
                </div>
                <div className='subform-add-article'>
                    <label>Penulis</label> <br />
                    <input type='text' name="author"/>
                </div>
                <div className='subform-add-article'>
                    <label>URL</label> <br />
                    <input type='text' name="url"/>
                </div>
                <div className='subform-add-article'>
                    <label>Gambar</label> <br />
                    <input type='file' name="images" accept='img/*'/>
                </div>
                <div className='subform-add-article'>
                    <label>Tanggal Publikasi</label> <br />
                    <input type='date' name="tanggal_terbit" />
                </div>
                <div className='subform-add-article'>
                    <label>Kategori</label> <br />
                    <Select options={category} />
                </div>
                <div className='subform-add-article'>
                    <label>Deskripsi</label> <br />
                    <input type='text' name="description"/>
                </div>
                <div className='subform-add-article'>
                    <label>Konten Article</label> <br />
                    <textarea name="content"/>
                </div>


            </form>
        
        
        
        </div>
    </div>
  )
}

export default FormTambahArtikel