import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Contact from './Components/Contact'
import Intro from './Components/Intro'
import Projects from './Components/Projects' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
     
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/projects" element={<Projects />} /> 
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)