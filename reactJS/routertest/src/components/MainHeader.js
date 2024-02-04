import { NavLink, Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={classes.active} to='/welcome'>
                            Welcomeaaaaaa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>
                            Products aaaaaa
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        
    );
};

export default MainHeader;