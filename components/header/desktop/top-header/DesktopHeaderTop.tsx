import React from 'react'
import AuthDesktop from './AuthDesktop'
import CartDesktop from './CartDesktop'
import LogoDesktop from './LogoDesktop'
import SearchDesktop from './SearchDesktop'

const DesktopHeaderTop = () => {
  return (
    <div
          id="h_top"
          className="hidden lg:flex py-3 px-4 w-full justify-between bg-white z-10"
        >
          <div className="flex gap-5 items-center">
            <LogoDesktop />
            <SearchDesktop />
          </div>
          <div className="flex items-center">
            <AuthDesktop />
            <span className="bg-neutral-200 mx-3 w-px h-6"></span>
            <CartDesktop />
          </div>
        </div>
  )
}

export default DesktopHeaderTop