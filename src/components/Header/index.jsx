import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';
import { NavLink } from 'react-router-dom';

Header.propTypes = {};
function Header() {
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs="auto">
                        <a
                            className='header__link header__title'
                            target="_blank"
                            rel='noopener noreferrer'
                        >
                            Photo-app-redux
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName='header_links--active'
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;