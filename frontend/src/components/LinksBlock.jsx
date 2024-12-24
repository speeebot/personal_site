import React from 'react'
import { Box, Typography } from '@mui/material'

const LinksBlock = () => {
  return (
    <Box id="links-block" mt={2}>
      <Typography id="links-text" variant="h5" gutterBottom>
        you can find me here:
      </Typography>
      <Box
        id="social-links"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <a href="https://github.com/speeebot" target="_blank" rel="noreferrer">
          <picture>
            <source
              srcSet="/resources/images/GitHub-Mark-Light-120px-plus.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/resources/images/GitHub-Mark-120px-plus.png"
              alt="GitHub"
              title="GitHub"
              style={{ width: '48px' }}
            />
          </picture>
        </a>
        <a
          href="https://www.linkedin.com/in/diazshawn"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/resources/images/LI-In-Bug_120px.png"
            alt="LinkedIn"
            title="LinkedIn"
            style={{ width: '48px' }}
          />
        </a>
        <a href="mailto:shawn@shawndiaz.dev" target="_blank" rel="noreferrer">
          <picture>
            <source
              srcSet="/resources/images/white_email_120px.png"
              media="(prefers-color-scheme: dark)"
            />
            <img
              src="/resources/images/black_email_120px.png"
              alt="Email"
              title="Send me an Email"
              style={{ width: '48px' }}
            />
          </picture>
        </a>
      </Box>
    </Box>
  )
}

export default LinksBlock
