import { Link } from 'react-router-dom'
import logo from '../../assets/logos/LOGO.png'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo de Kasa" />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/About">A propos</Link>
    </nav>
    </header>
  )
}

export default Header