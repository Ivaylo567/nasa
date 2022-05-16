import React from 'react'
import logo from '../../images/nasa-logo.svg';
import Svg from '../Svg/Svg'
import { NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <header className='header'>
            <Svg src={logo} className={'logo'} alt={'logo'} />
            <div className='header-left'>
                <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : '') }>Home</NavLink>
                <NavLink to='/news' className={({ isActive }) => (isActive ? 'active' : '')}>News</NavLink>
                <NavLink to='/about'  className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                <NavLink to='/contacts' className={({ isActive }) => (isActive ? 'active' : '')}> Contacts </NavLink>
            </div>
      </header>
    )
}

export default Header;