import React from 'react';
import logo from '../../images/fahim.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className='container mt-3 mb-3'>
            <nav className='navbar navbar-expand-lg mb-3 col col-12 col-sm-12 mb-4 navbar-style'>
                <div className='container nav-bg-light rounded-2 border border-2 '>
                    <a className='navbar-brand font-weight-bold' href="#/"><h3 className='col-12 col-sm-12 '>Sports  <span className='news-title-color'>Man Club</span></h3></a>
                    <div className='collapse navbar-collapse ml-auto' id="navbarNavAltMarkup">
                        <div className='navbar-nav ms-auto'>
                            <a className='nav-link nav-text-dark me-4 home text-primary mt-1' aria-current="page" href="/">Home</a>
                            <a className='nav-link nav-text-dark me-4 news mt-1' href="#/">News</a>
                            <a id="news-blog" className='nav-link nav-text-dark me-4 blog mt-1' href="#/">Blog</a>
                            <a className='nav-link nav-text-dark me-4 about-us mt-1' href="#/">About Us</a>
                            <a className='nav-link nav-text-dark me-4' href="#/"><img id='nav-bar-image' className='img-fluid' src={logo} alt=""/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
