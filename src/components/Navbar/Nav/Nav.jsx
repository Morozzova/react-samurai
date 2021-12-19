import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
            <li className={s.item}>
                <NavLink to="/profile" className={(navData) => navData.isActive ? s.activeLink : ''}>Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/dialogs" className={(navData) => navData.isActive ? s.activeLink : ''}>Messages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/news" className={(navData) => navData.isActive ? s.activeLink : ''}>News</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/music" className={(navData) => navData.isActive ? s.activeLink : ''}>Music</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/users" className={(navData) => navData.isActive ? s.activeLink : ''}>Users</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to="/settings" className={(navData) => navData.isActive ? s.activeLink : ''}>Settings</NavLink>
            </li>
            </ul>
        </nav>
    )
}

export default Nav;