import classes from "./Header.module.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
function Header(props) {

    return (
        <div className={classes.header}>
            <a className={classes.logo}>Simple List</a>
            <div className={classes["header-right"]}>
                <NavLink className={(navData) => navData.isActive ? classes.active : 'none'} to="/">
                    <div>
                        Home
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? classes.active : 'none'} to="/new">
                    <div>
                        New
                    </div>

                </NavLink>
            </div>
        </div>

    )

}

export default Header