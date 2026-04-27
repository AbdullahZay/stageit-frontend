import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterPage.css'


function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return(
        <div className="register">
            <h1 className="register-title">Stageit</h1>
            <h2 className="register-subtitle">Create Account</h2>
            <input  
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
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
            <button>Register</button>
            <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span> </p>
        </div>
    )
    
}

export default RegisterPage