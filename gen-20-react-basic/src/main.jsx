import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PageHeader from './components/Header.jsx'
import PageFooter from './components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageHeader />
    <App />
    <PageFooter />
  </React.StrictMode>,
)
