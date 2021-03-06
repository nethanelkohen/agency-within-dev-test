import React from 'react';
import 'bulma/css/bulma.css';
import logo from '../assets/lightning.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <section className="hero is-dark is-small is-bold">
    <div className="hero-body">
      <div className="container has-text-centered">
        <img src={logo} alt="Logo" />
        <Link to={'/'}>
          <h1 className="title">stockbuzz</h1>
        </Link>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  </section>
);

export default Header;
