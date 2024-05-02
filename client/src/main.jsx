import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

     <Router>
     <Routes>
       
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
 
)
