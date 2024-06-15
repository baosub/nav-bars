import React from 'react'
import Link from "next/link";

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about'},
      {title: 'Contact', path: '/contact'},
     
  ];

const NavBar = () => {
  return (
    <div>
        
        {
            pages.map((page)=>(
                <Link href={page.path} key={page.title}>{page.title}</Link>

            ))

        }
      
    </div>
  )
}

export default NavBar
