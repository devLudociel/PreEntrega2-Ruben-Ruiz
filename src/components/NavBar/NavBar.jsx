import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logoB.png'
import CardWiget from '../CardWiget/CardWiget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logoNav">
                <Link to="/">
                <img src={logo} alt="logo" />
                </Link>
            </div>

            <ul className="items">
                <li className="item">
                    <Link to="/category/base">Bases</Link>
                </li>

                <li className="item">
                <Link to="/category/polvo">Compactos</Link>
                </li>

                <li className="item">
                <Link to="/category/high">Iluminadores</Link>
                </li>

                <li className="item">
                <Link to="/category/labial">Labiales</Link>
                </li>

                <li className="item">
                <Link to="/category/rubor">Rubor</Link>
                </li>

                <li className="item">
                <Link to="/category/surtido">Surtidos</Link>
                </li>
            </ul>

            <div className="cardWiget">
                <CardWiget />
            </div>
        </nav>
    )
}

export default NavBar