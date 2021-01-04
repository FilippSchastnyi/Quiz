import React from "react";
import {NavLink} from "react-router-dom";


const NavOptions = props => {
    return (
        <li onClick={props.onClick}>
            <NavLink exact={props.exact} to={props.to}>
                {props.label}
            </NavLink>
        </li>
    )
}

export default NavOptions