'use client';
import Link from 'next/link'
import { FC, useCallback, useEffect, useState } from 'react';

interface Props {
    item: any;
}
const matchesDesktop = () =>
    window.matchMedia('(min-width: 1024px)').matches

const NavbarItem: FC<Props> = ({ item }) => {

    const [isDesktop, setIsDesktop] = useState(true);

    const setMedia = useCallback(() => {
        setIsDesktop(matchesDesktop())
    }, [])

    useEffect(() => {
        setMedia()
        window.addEventListener('resize', setMedia)
        return () => window.removeEventListener('resize', setMedia)
    }, [])

    const render = isDesktop ? item.label : item.aria;
    const classes = 'mobile:mr-0 mobile:py-5 mobile:w-full mobile:border-b mobile:border-borderGray flex items-center h-full active:text-navbarBlue text-base text-primaryGray hover:border-b-2 hover:border-b-primaryBlue'
    return (
        <Link href={item.slug} aria-label={item.aria} className={`${classes} ${item.class ? item.class : ''}`}>
            {render}

        </Link>
    )
}
export default NavbarItem;