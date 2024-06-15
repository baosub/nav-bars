'use client'

import React, { useState } from 'react'
import Link from "next/link";
import { Box } from '@mui/material';


const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about'},
      {title: 'Contact', path: '/contact'},
     
  ];

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = ()=> setOpen(!open);
  return (
    <Box >
        {open ? <Box sx={{width: '100vw', height: '100vh', bgcolor: 'grey'}} >

            {
            pages.map((page)=>(
                <Link onClick={toggleMenu} href={page.path} key={page.title}>{page.title}</Link>

            ))

        }
        </Box> : <><button onClick={toggleMenu}>botton para desplegar el menu</button></>}



        
        
      {/*{
            pages.map((page)=>(
                <Link href={page.path} key={page.title}>{page.title}</Link>

            ))

        } */}  
      
    </Box>
  )
}

export default NavBar
