import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e9e9e9',
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: 'monospace',
  },
})

export default lightTheme
