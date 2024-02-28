import Image from 'next/image'
import logo from './../../public/icons/navIcon.svg'
import { useCallback, useEffect, useState } from 'react'

const matchesDesktop = () => window.matchMedia('(min-width: 1024px)').matches

const Logo = () => {
    const [isDesktop, setIsDesktop] = useState(true)

    const setMedia = useCallback(() => {
        setIsDesktop(matchesDesktop())
    }, [])

    useEffect(() => {
        setMedia()
        window.addEventListener('resize', setMedia)
        return () => window.removeEventListener('resize', setMedia)
    }, [])

    return (
        <div className="flex items-center mr-8">
            <a href="/" aria-label="home">
                <Image src={logo} alt="logo" width={isDesktop ? 48 : 35} height={48} />
            </a>
            <p>
                <span className='text-navbarBlue font-bold text-2xl laptop:text-[2rem]'>Aero</span>
                <span className="text-lightBlue font-bold text-2xl laptop:text-[2rem]">Nex</span>
            </p>
        </div>
    )
}
export default Logo;