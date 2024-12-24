import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    text: {
      primary: '#e9e9e9',
    },
  },
  typography: {
    fontFamily: 'monospace',
  },
})

export default darkTheme
