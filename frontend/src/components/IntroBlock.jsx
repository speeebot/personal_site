import React from 'react'
import { Box, Typography } from '@mui/material'

const IntroBlock = () => {
  return (
    <Box id="intro-block" mb={2}>
      <Typography 
        id="intro" 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
      >
        hi, i'm Shawn
      </Typography>
      <Typography id="intro-subtext" variant="body1">
        Graduate CS student at USF, aspiring software developer
      </Typography>
    </Box>
  )
}

export default IntroBlock
