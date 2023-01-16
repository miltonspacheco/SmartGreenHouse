import React from 'react'
import "./header.css"


const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <p className="navLogo">Smart GreenHouse</p>
            <div className="navMenu">
                <ul className="navItens">
                    <li className="navItem">
                        <a href="#home" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#criar" className="navLink">Criar</a>
                    </li>
                    <li className="navItem">
                        <a href="#listar" className="navLink">Listar</a>
                    </li>
                    <li className="navItem">
                        <a href="#apagar" className="navLink">Apagar</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header