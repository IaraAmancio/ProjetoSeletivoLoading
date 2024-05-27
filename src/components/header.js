import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_branca.png';

function Header(){
    return (
        <header className="App-header">
          <img src={logo} alt="Logo" className='logo_header'/>      
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre nós</Link></li>
                    <li><Link to="/loja">Loja</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>   
        </header> 
    );
};

export default Header;