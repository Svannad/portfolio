import { NavLink } from "react-router-dom";
import Logo from '../img/logo.png'
import '../css/navbar.css'

export default function Navigation () {
    return (
        <header className="navbar">
        <NavLink to="/">
            <img src={Logo} className="logo"/>
        </NavLink>
        <nav className="navpunkter">
            <NavLink to="/projekter" className="navlinks">Projekter</NavLink>
            <NavLink to="/tabor" className="navlinks">Tabor Ungdóm</NavLink>
            <NavLink to="/illustrationer" className="navlinks">llustrationer</NavLink>
            <a href="#footer" className="navlinks kontakt">Kontakt</a>
        </nav>
        </header>
    )
}