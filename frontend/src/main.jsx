import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector } from 'react-redux'
import { store } from './app/store'
import App from './App'
import './index.css'
import { initAnalytics } from './utils/analytics'

// Initialize analytics
initAnalytics();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

// We'll create a "ThemeRoot" to handle the theme selection based on Redux state:
function ThemeRoot() {
  // We can't do a Redux hook directly here, so we might handle it differently—see below
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeRoot />
    </Provider>
  </React.StrictMode>
)
