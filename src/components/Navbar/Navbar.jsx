import s from './Navbar.module.css';
import Nav from "./Nav/Nav";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = () => {

    return (
        <div className={s.navbar}>
            <Nav/>
            <FriendsContainer />
        </div>
    )
}


export default Navbar;