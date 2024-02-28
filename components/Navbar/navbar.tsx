'use client';
import NavbarItem from './navbar-item';
import Logo from './logo';
import { useCallback, useEffect, useState } from 'react';
const matchesDesktop = () => window.matchMedia('(min-width: 1024px)').matches

const Navbar = () => {

  const toggle = () => {
    const menu = document.querySelector(".mobile-menu");
    menu!.classList.toggle("hidden");
  }

  const items = [
    { 'label': 'Nosotros', 'slug': '/nosotros', 'aria': 'Nosotros', class: "mr-4 mobile:border-t" },
    { 'label': 'Novedades', 'slug': '/novedades', 'aria': 'Novedades', class: "mr-4" },
    { 'label': 'Inversores', 'slug': '/inversores', 'aria': 'Inversores', class: "mr-4" },
    { 'label': 'Sumate al equipo', 'slug': '/sumate-al-equipo', 'aria': 'Sumate al equipo', class: "mr-4" },
    { 'label': 'Productos y Servicios', 'slug': '/Proveedores', 'aria': 'Provedores', class: "mr-4" },
    { 'label': '*', 'slug': '/', 'aria': 'Asterisco', class: 'text-[2rem] p-5 laptop:border-borderGray laptop:border-l mr-0 mobile:p-0 mobile:py-5 mobile:w-full ' },
    { 'label': 'ES', 'slug': '/ES', 'aria': 'Español', 'class': 'laptop:border-x p-5 border-borderGray mobile:p-0 mobile:py-5 mobile:w-full mobile:border-b ' },
    { 'label': 'Sitios', 'slug': '/sitios', 'aria': 'Sitios', 'class': 'laptop:border-r p-5 border-borderGray mr-0 mobile:p-0 mobile:py-5 mobile:w-full mobile:border-b' },
  ]

  const [isDesktop, setIsDesktop] = useState(true)

  const setMedia = useCallback(() => {
    setIsDesktop(matchesDesktop())
    if (isDesktop) {
      const menu = document.querySelector(".mobile-menu");
      menu!.classList.add("hidden");
    }
  }, [])

  useEffect(() => {
    setMedia()
    window.addEventListener('resize', setMedia)
    return () => window.removeEventListener('resize', setMedia)
  }, [])

  return (
    <nav className="flex items-center justify-between laptop:justify-center p-3 pb-0 h-[88px] mobile:border-b mobile: border-borderGray">
      <Logo />
      <div className="flex align-center laptop:hidden mobile:h-full">
        <button onClick={toggle} className="flex items-center px-3 border-l border-borderGray">
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>

      <div className="hidden mobile-menu mobile:absolute mobile:top-20 mobile:w-full p-2 left-0 bg-white">
        <ul>
          <li>
            {
              items?.map((item: any) => (
                <NavbarItem item={item} key={item.slug}></NavbarItem>
              )
              )
            }
          </li>
        </ul>
      </div>
      <div className="h-full hidden laptop:flex items-center flex-row">
        {
          items?.map((item: any) => (
            <NavbarItem item={item} key={item.slug}></NavbarItem>
          )
          )
        }
      </div>

    </nav>
  )
}
export default Navbar;
