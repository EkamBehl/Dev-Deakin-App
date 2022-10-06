import React from 'react'
import Input from './Input'
import { Link, Outlet } from 'react-router-dom'
export default function NavBar() {
  return (
    <div style={{backgroundColor:'grey', 'width':'100%',paddingRight:'30px'}}>
        <div>
            DEV@Deakin
            
            <input 
                type='text'
                placeholder='search'
            />
            <span style={{paddingLeft:'30px'}}>
              <Link to='/'>Post</Link>
            </span>
            <span style={{paddingLeft:'30px'}}>
            <Link to='/login'>Login</Link>
            </span>
            
            
            <Outlet/>
        </div>
    </div>
  )
}
