import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Master from './components/master'
import Searching from './components/searching'
import Fund from './Not'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Weather' element={<Master/>}/>
      <Route path='*' element={<Fund/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
