'use client'
import { links } from './Links'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { nimbusLight, tradeGothic } from '@/app/fonts/fonts'
import { usePathname } from 'next/navigation'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathName = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [] )


  return (
    <div className={` fixed z-50  w-full flex justify-start pl-20  flex-wrap gap-4  items-end transition-all  duration-[1000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isScrolled ? "bg-white backdrop-blur-xl bg-opacity-20" : ""} `}>
        {links.map((link) => (
            <li className={`bg-transparent ${isScrolled ? "" : ""} `}  key={link.title}>
                <Link className={`bg-transparent text-[0.8rem] transition duration-700 ${pathName === link.href ? "font-bold" : ""} ${isScrolled ? "" : "text-white"} ${tradeGothic.className} `} href={link.href} > {link.title} </Link>
            </li>
        ))}
    </div>
  )
}

export default Header