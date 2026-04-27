import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header( { theme, handleThemeToggle } ) {
    const navigate = useNavigate()

    return(
        <header className="header" >
            <Link to="/" className="header-logo">Stageit</Link>
            <div className="header-buttons" > 
                <button className="header-theme" onClick={handleThemeToggle} >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                <button className="header-register" onClick={() => navigate('/register')}>Register</button>
                <button className="header-login" onClick={() => navigate('/login')}>Login</button>
            </div>
        </header>
    )
}

export default Header