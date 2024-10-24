import { NavLink, Link } from 'react-router-dom';
import css from './Header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link to="/home">
          <img src={logo} alt="TravelTrucks Logo" width="136" height="16" />
        </Link>
      </div>
      <nav className={css.nav}>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? css.active : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : '')}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
