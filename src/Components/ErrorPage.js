import { Box, Typography } from '@mui/material'
import React from 'react'

const ErrorPage = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'}> 
     <Typography sx={{color:'red',fontSize:'3rem',textAlign:'center'}}>404-Page Not Found!</Typography>

      
      </Box>
  )
}

export default ErrorPage