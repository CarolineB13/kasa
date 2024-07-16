import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/LOGO.png';

// Composant Header pour afficher l'en-tête du site
function Header() {
  return (
    <header>
      {/* Logo de Kasa */}
      <img src={logo} alt="logo de Kasa" />

      {/* Navigation */}
      <nav>
        {/* Lien vers la page d'accueil */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Accueil
        </NavLink>
        {/* Lien vers la page "À propos" */}
        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
