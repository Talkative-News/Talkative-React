import React from 'react'
import { useState } from 'react'
import './pwStyle.css'

export const inputText = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    
  return (
    
    <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder='Kata Sandi' />
  )
}
