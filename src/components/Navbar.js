import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import style from 'styles/Navbar.module.scss';
import NavbarLogo from 'images/mmlogo.jpg';
import { SOCIAL_NETWORKS } from 'utils/constants';

const NavbarLink = ({ href, iconName, children }) => (
  <a
    className={`${style['navbar__social-link']} ${style[`navbar__social-link--${iconName}`]}`}
    href={href}
    target='_blank'
    rel='noreferrer'>
    {children}
  </a>
);

NavbarLink.propTypes = {
  href: PropTypes.string,
  iconName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const Navbar = () => (
  <header className={style.navbar}>
    <Container className={style['navbar-container']}>
      <img
        src={NavbarLogo}
        alt='Music Matters'
        className={style.navbar__logo}
      />
      <div className={style.navbar__social}>
        <NavbarLink iconName='instagram' href={SOCIAL_NETWORKS.INSTAGRAM}>Instagram</NavbarLink>
        <NavbarLink iconName='facebook' href={SOCIAL_NETWORKS.FACEBOOK}>Facebook</NavbarLink>
      </div>
    </Container>
  </header>
);

export default Navbar;
