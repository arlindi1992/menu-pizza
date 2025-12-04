import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <header className={classes.header}>
            <h1> Pizzeria</h1>
            <p>Les meilleures pizzas artisanales</p>
            <nav className={classes.navbar}>
                <ul className={classes["nav-links"]} >
                    <li>
                        <NavLink to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar;