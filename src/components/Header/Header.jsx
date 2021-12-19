import s from './Header.module.css';
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
            <div className={s.loginBlock}>
                <div>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logOutOnSite}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>

        </header>
    )
}

export default Header;