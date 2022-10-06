import React from 'react'
import './Subscribe.css'
export default function Subscribe() {
  return (
   <div>
    <div className="SignUp">
        <span className='text'> SIGN UP FOR DAILY INSIDER</span>
        <span className="EmailInput"><input  type="email"></input></span>
        <span className='button'><button type="submit">Subscribe</button></span>
    </div>
   </div>
  )
}