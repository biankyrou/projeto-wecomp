import React, { useState, useEffect } from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import './menu_nav.css';


export default function Menu_nav(){
    const [itemAtivo, setitemAtivo] = useState('');
    const localização = useLocation();

    useEffect(() => {
        setitemAtivo(localização.pathname);
    }, [localização]);

    const handleClick = (path) => {
        setitemAtivo(path);
    };

    return(
        <div className='menu'>
            <ul className='menu-nav'>
                <li className={itemAtivo === '/' ? 'ativo' : ''}>
                    <NavLink to='/' className="menu-navegacao--link" onClick={() => handleClick('/')}>Home</NavLink>
                </li>
                <li className={itemAtivo === '/sobre' ? 'ativo' : ''}>
                    <NavLink to='/sobre' className="menu-navegacao--link" onClick={() => handleClick('/sobre')}>Sobre</NavLink>
                </li>
                <li className={itemAtivo === '/cronograma' ? 'ativo' : ''}>
                    <NavLink to='/cronograma' className="menu-navegacao--link" onClick={() => handleClick('/cronograma')}>Cronograma</NavLink>
                </li>
                <li className={itemAtivo === '/equipe' ? 'ativo' : ''}>
                    <NavLink to='/equipe'className="menu-navegacao--link" onClick={() => handleClick('/equipe')}>Equipe</NavLink>
                </li>
            </ul>
        </div>
    )
}