import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signupform from './Signupform.jsx'
import Post from './Post.jsx'
import Forlogin from './Forlogin.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Users from './Users.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/login" element={<Forlogin />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
