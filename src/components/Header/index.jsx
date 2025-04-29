import React from "react"
import { useState } from "react"
import Logo from '../../assets/cabide.png'
import './style.css'
import PerfilIcon from '../../assets/perfil.png'
import CartIcon from '../../assets/carrinho-de-compras.png'
import { Link } from "react-router-dom"


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <>

            <div className="Header">
                
                <div className="HeaderLogo">
                    <Link to='/home'><img className="Logo" src={Logo} style={{ width: '35px' }} /></Link>
                    <span className="HeaderNameStore">Loja De Roupa</span>
                </div>

                <div className="HeaderNav">
                    <nav class="Nav">
                        <a href="/home">Início</a>
                        <a href="#">Roupas</a>

                        <Link to='/login'><button className="PerfilIcon"><img style={{ width: '30px' }} src={PerfilIcon} alt="Perfil" /></button></Link>

                        <button className="CartIcon" onClick={toggleSidebar}>
                            <img style={{ width: '30px' }} src={CartIcon} alt="Carrinho" />
                        </button>

                        {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
                        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                            <h2>Seu Carrinho</h2>

                            <ul>
                                <li>Product 1</li>
                                <li>Product 2</li>
                                <li>Product 3</li>
                            </ul>

                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}