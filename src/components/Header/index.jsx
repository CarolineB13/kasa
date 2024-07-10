import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/LOGO.png'
import '../../styles/index.css'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo de Kasa" />
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Accueil</NavLink>
      <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>À propos</NavLink>
    </nav>
    </header>
  )
}

export default Header