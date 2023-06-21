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
                    <Link to="/category/men's clothing">men's clothing</Link>
                </li>

                <li className="item">
                <Link to="/category/electronics">electronics</Link>
                </li>

                <li className="item">
                <Link to="/category/jewelery">jewelery</Link>
                </li>

                <li className="item">
                <Link to="/category/women's clothing">women's clothing</Link>
                </li>
            </ul>

            <div className="cardWiget">
                <CardWiget />
            </div>
        </nav>
    )
}

export default NavBar