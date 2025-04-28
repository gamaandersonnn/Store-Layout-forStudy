import React from "react";
import Header from "../../components/Header";
import './style.css'
export default function Login() {
    return (
        <>
            <head><title>Loja de Roupa/Login</title></head>
            
            <Header />
            <div className="container">
                <div className="login-form">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}