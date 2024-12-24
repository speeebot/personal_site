import React from 'react'
import { Box } from '@mui/material'

const Headshot = () => {
  return (
    <Box 
      id="headshot" 
      component="img" 
      src={"resources/images/pfp2.jpg"} 
      alt="Headshot"
      sx={{
        width: { xs: '50vw', md: 200 },
        maxWidth: 200,
        height: 'auto',
        my: 2
      }}
    />
  )
}

export default Headshot
