import classes from './navbar.module.css';

function Navbar(){
    return(
        <>
        <header className={classes.header}>
            <h1> Pizzeria</h1>
            <p>Les meilleures pizzas artisanales</p>
            <nav className={classes.navbar}>
                <ul className={classes["nav-links"]} >
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Administration</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar;