import React from 'react'
import BottomNav from '@/components/BottomNav/page'
import NavDropDown from '@/components/NavDropDown/page'
import Navbar from '@/components/Navbar/page'
import ShortBanner from '@/components/ShortBanner/page'

const NavSection = () => {
  return (
    <div>
      <ShortBanner/>
        <Navbar/>
        <BottomNav/>
        <NavDropDown/>
    </div>
  )
}

export default NavSection
