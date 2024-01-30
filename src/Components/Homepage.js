import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Footer from './Footer'
import { Box } from '@mui/material'
const Homepage = () => {
  // useEffect(()=>{

  //  sessionStorage.setItem('token1',"")
  //   },[])
  return (
   <>
   <Box>
   <Navbar/>
   <Box mt={'-7px'}>
   <Login/>
   </Box>
   <Footer/>
   </Box>
   </>
  )
}

export default Homepage