import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Header(props) {

    window.onscroll = function (e) {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var header = document.querySelector('header');
        var height = -header.clientHeight;
        header.style.transition = 'transform 0.1s';

        (scrollY <= Math.max(this.lastScroll, 50) || window.innerWidth <= 1200 || this.loaded === undefined)
            ? header.style.transform = 'translateY(0px)'
            : header.style.transform = 'translateY(' + height + 'px)'

        this.lastScroll = scrollY;
        this.loaded = true;
    }

    useEffect(() => {
    }, [])

    return (
        <header>
            <a className='logo'><img src={require('../assets/img/logo.jpg')} /></a>
            <ul>
                <li><Link to="homeSec" spy={true} smooth={true}>Home</Link></li>
                <li><Link to="aboutSec" spy={true} smooth={true}>About</Link></li>
                <li><Link to="portfolioSec" spy={true} smooth={true}>Portfolio</Link></li>
                <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                <li><Link to="contactSec" spy={true} smooth={true}>Contact</Link></li>
            </ul>
            <div className='socialBox'>
                <a href='https://github.com/itsmewaqas' target={'_blank'}><img src={require('../assets/img/github.png')} /></a>
                <a href='https://pk.linkedin.com/in/muhammad-waqas-43498b47' target={'_blank'}><img src={require('../assets/img/linkend.png')} /></a>
            </div>
        </header>
    );
}

export default Header;