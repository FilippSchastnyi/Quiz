import React from "react";
import classes from './Nav.module.scss'

const Nav = props => {
    const cls = [classes.Nav]
    if (!props.isOpen){
        cls.push(classes.close)
    }
    return (
        <div className={cls.join(' ')}>
            <aside>
                <div>
                    <ul>

                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Nav