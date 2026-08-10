import React from 'react'
import Navbar from './header/Navbar'
import Footer from './footer'


const Layout = ({children} : {children  : React.ReactNode}) => {
  return (
    <div className=''>
        <Navbar/>
          {children}
        <Footer/>
    </div>
  )
}

export default Layout
