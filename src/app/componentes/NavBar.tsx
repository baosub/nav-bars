'use client'

import React, { useState } from 'react'
import Link from "next/link";
import { Box } from '@mui/material';


const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },

];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  return (
    <Box >
      {open ? (<Box sx={{ width: '100vw', height: '100vh', bgcolor: 'grey' }} >
        <Box>

          <button onClick={toggleMenu}>cerrar</button>
        </Box>

        <Box sx={{ width: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Box>   {
            pages.map((page) => (
              <Link onClick={toggleMenu} href={page.path} key={page.title}>{page.title}</Link>

            ))

          }  </Box>

        </Box>

      </Box>) : (<><button onClick={toggleMenu}>botton para desplegar el menu</button></>)}

    </Box>
  )
}

export default NavBar
