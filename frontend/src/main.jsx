import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector } from 'react-redux'
import { store } from './app/store'
import App from './App'

// We’ll create a "ThemeRoot" to handle the theme selection based on Redux state:
function ThemeRoot() {
  // We can’t do a Redux hook directly here, so we might handle it differently—see below
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeRoot />
    </Provider>
  </React.StrictMode>
)
