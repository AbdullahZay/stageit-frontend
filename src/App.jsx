import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  const[theme, setTheme] = useState("light")


  function handleThemeToggle(){
    theme === "light" ? setTheme("dark") : setTheme("light") 
  }


  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <Header theme= {theme} handleThemeToggle= {handleThemeToggle} />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/post/:id" element= {<PostPage />} /> 
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App