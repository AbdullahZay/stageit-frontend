import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UserProfilePage from './pages/UserProfilePage'

function App() {
  const[theme, setTheme] = useState("light")
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))


  function handleThemeToggle(){
    theme === "light" ? setTheme("dark") : setTheme("light") 
  }


  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <Header 
          theme= {theme}
          handleThemeToggle= {handleThemeToggle} 
          isLoggedIn= {isLoggedIn}
          setIsLoggedIn= {setIsLoggedIn}
          />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/post/:id" element= {<PostPage />} /> 
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage setIsLoggedIn= {setIsLoggedIn} />}/>
          <Route path='/users/:username' element={<UserProfilePage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App