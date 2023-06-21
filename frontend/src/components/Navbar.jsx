import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavigationBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import routes from '../routes.js';
import { useAuth } from '../hooks';
import Logo from '../assets/landing/images/logo1.svg';
import classes from './Navbar.module.css';

export function Navbar() {
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    <header className="header-styles">
      <NavigationBar
        variant="dark"
        bg="dark"
        expand="md"
        className="border-bottom-mb-5"
      >
        <Container>
          <NavigationBar.Brand
            as={Link}
            className="d-flex align-items-baseline"
            to={
              auth.isLoggedIn
                ? routes.defaultProfilePagePath() // Затем вставим редирект на страницу со снипетами
                : routes.lendingPath()
            }
          >
            <Nav>
              <Image
                alt={t('navbar.mainLabel')}
                src={Logo}
                aria-hidden="true"
                className={`${classes.navbarLogo}`}
              />{' '}
              <span className={`${classes.navbarText}`}>
                {t('navbar.mainLabel')}
              </span>
            </Nav>
          </NavigationBar.Brand>
          <NavigationBar.Toggle as="button" aria-controls="navbar-toggler" />
          <NavigationBar.Collapse id="navbar-toggler">
            <Nav as="ul">
              {auth.isLoggedIn && (
                <Nav.Item as="li" className="d-flex align-items-center px-2">
                  <Nav.Link
                    as={Link}
                    to={routes.defaultProfilePagePath()}
                    className={`${classes.navLink}`}
                  >
                    {t('navbar.profile')}
                  </Nav.Link>
                </Nav.Item>
              )}
              <Nav.Item
                as="li"
                className="d-flex align-items-center justify-content-center"
              >
                <Nav.Link
                  as={Link}
                  to={routes.aboutPagePath()}
                  className={`${classes.navLink}`}
                >
                  {t('navbar.about')}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={routes.aboutPagePath()}
                  className={`${classes.navLink}`}
                >
                  Приемущества
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={routes.aboutPagePath()}
                  className={`${classes.navLink}`}
                >
                  Возможности
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={routes.aboutPagePath()}
                  className={`${classes.navLink}`}
                >
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav className="justify-content-end">
                {auth.isLoggedIn && (
                  <Nav.Item
                    as="li"
                    className="py-2 px-2 d-flex align-items-center"
                  >
                    <Button
                      variant="primary"
                      className={`${classes.btnPrimary}`}
                      onClick={auth.logOut}
                    >
                      {t('navbar.logout')}
                    </Button>
                  </Nav.Item>
                )}
                {!auth.isLoggedIn && (
                  <Nav.Item
                    as="li"
                    className="py-2 px-2 d-flex align-items-center"
                  >
                    <Button
                      variant="light"
                      as={Link}
                      to={routes.loginPagePath()}
                      className={`${classes.btnLight}`}
                    >
                      {t('navbar.signIn')}
                    </Button>
                  </Nav.Item>
                )}
                {!auth.isLoggedIn && (
                  <Nav.Item
                    as="li"
                    className="py-2 px-2 d-flex align-items-center"
                  >
                    <Button
                      variant="primary"
                      as={Link}
                      to={routes.signUpPagePath()}
                      className={`${classes.btnPrimary}`}
                    >
                      {t('navbar.signUp')}
                    </Button>
                  </Nav.Item>
                )}
              </Nav>
            </Nav>
          </NavigationBar.Collapse>
        </Container>
      </NavigationBar>
    </header>
  );
}
