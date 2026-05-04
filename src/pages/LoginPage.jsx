import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage({ setIsLoggedIn }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    function handleLogin() {
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            setIsLoggedIn(true)
            navigate('/')
        })
    }
    
    return(
        <div className="login">
            <h1 className="login-title">Stageit</h1>
            <h2 className="login-subtitle">Welcome Back</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account? <span onClick={() => navigate('/register')}>Register</span> </p>
        </div>
    )
}

export default LoginPage