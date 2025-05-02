import React, { useState, useEffect } from 'react'
import { ThemeProvider, CssBaseline, useMediaQuery, Box, IconButton, Tooltip } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import lightTheme from './theme/lightTheme'
import darkTheme from './theme/darkTheme'
import ErrorBoundary from './components/ErrorBoundary'

// Your custom components
import IntroBlock from './components/IntroBlock'
import Headshot from './components/Headshot'
import LinksBlock from './components/LinksBlock'

function App() {
  // Detect system preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  
  // State for manual theme override
  const [manualTheme, setManualTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : null
  })

  // Determine final theme
  const isDarkMode = manualTheme !== null ? manualTheme : prefersDarkMode

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const theme = React.useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  )

  const toggleTheme = () => {
    setManualTheme(!isDarkMode)
  }
  
  return (
    <ThemeProvider theme={theme}>
      {/* MUI baseline to reset default browser styles */}
      <CssBaseline />
      <ErrorBoundary>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          textAlign="center"
          p={2}
          position="relative"
        >
          <Tooltip title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ position: 'absolute', top: 16, right: 16 }}
              aria-label="toggle theme"
            >
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
          <IntroBlock />
          <Headshot />
          <LinksBlock />
        </Box>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
