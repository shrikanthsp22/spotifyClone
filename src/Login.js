import React from 'react'
import './login.css'
import logo from './images/logo.png'
import { LoginButton } from './styles.main'
import './login.css'
import { loginURL } from './spotify'

function Login() {
    return (
        <div className="login">
            <img src={logo} width="100%" alt="image" />
            <LoginButton href={loginURL}>LOGIN TO SPOTIFY</LoginButton>
        </div>
    )
}

export default Login