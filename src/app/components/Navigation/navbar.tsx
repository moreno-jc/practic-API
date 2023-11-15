'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import style from './navigation.module.css';

 
const Links = [
    {href: '/', label: 'Home'},
    {href: '/cardSimple', label: 'CardUser'},
    {href: '/cardWather', label: 'CardWather'},
    {href: '/cardMovies', label: 'CardMovies'}

];
export default function Navigation(){
    const pathname = usePathname()

    return (
      <nav className="flex justify-end bg-yellow-500 p-4 text-white">
        <ul className="flex items-center">
            {Links.map(({ href, label }) => (      
          <li className="mr-8 mb-1" key={href}>
            <Link className={`${style.link} text-white hover:text-black ${pathname === href ? style.active : ''}`} href={href}>
            {label}
            </Link>
          </li>
            ))}
        </ul>
      </nav>
    )
}