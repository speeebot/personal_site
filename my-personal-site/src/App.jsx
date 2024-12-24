import React from 'react'
import { ThemeProvider, CssBaseline, useMediaQuery, Box } from '@mui/material'
import lightTheme from './theme/lightTheme'
import darkTheme from './theme/darkTheme'

// Your custom components
import IntroBlock from './components/IntroBlock'
import Headshot from './components/Headshot'
import LinksBlock from './components/LinksBlock'

function App() {
  // Detect whether the user’s system-level preference is dark
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  // If user’s system is dark, use our dark theme; otherwise, use light
  const theme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  )
  
  return (
    <ThemeProvider theme={theme}>
      {/* MUI baseline to reset default browser styles */}
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
        p={2}
      >
        <IntroBlock />
        <Headshot />
        <LinksBlock />
      </Box>
    </ThemeProvider>
  )
}

export default App
