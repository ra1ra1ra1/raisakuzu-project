import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import Gacha from './pages/Gacha.tsx'
import Homebar from './pages/Homebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gacha" element={<Gacha />} />
      </Routes>
      <Homebar/>
    </BrowserRouter>
  </StrictMode>,
)



