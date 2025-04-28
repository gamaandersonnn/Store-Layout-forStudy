import React from "react"
import Logo from '../../assets/cabide.png'
import './style.css'
import PerfilIcon from '../../assets/perfil.png'
import CartIcon from '../../assets/carrinho-de-compras.png'
import { Link } from "react-router-dom"


export default function Header() {

    return (
        <>
            
            <div className="Header">
                <div className="HeaderLogo">
                    <Link to='/home'><img className="Logo" src={Logo} style={{width:'35px'}}/></Link>
                    <span className="HeaderNameStore">Loja De Roupa</span>
                </div>
                <div className="HeaderNav">
                    <nav class="Nav">
                        <a href="/home">Início</a>
                        <a href="#">Roupas</a>
                        <Link to='/login'><button className="PerfilIcon"><img style={{ width: '30px' }} src={PerfilIcon} alt="Perfil" /></button></Link>
                        <button className="CartIcon"><img style={{ width: '30px' }} src={CartIcon} alt="Carrinho" /></button>
                    </nav>

                </div>
            </div>
        </>
    )
}