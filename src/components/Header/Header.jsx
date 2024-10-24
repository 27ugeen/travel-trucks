import { NavLink, Link } from 'react-router-dom';
import scss from './Header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.logo}>
        <Link to="/">
          <img src={logo} alt="TravelTrucks Logo" width="136" height="16" />
        </Link>
      </div>
      <nav className={scss.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? scss.active : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? scss.active : '')}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
