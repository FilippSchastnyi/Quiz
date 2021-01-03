import React from 'react'
import classes from './Burger.module.scss'

const Burger = props => {
    const cls = [classes.Burger]
    if (props.isOpen){
        cls.push(classes.open)
    }

    return(
        <button className={cls.join(' ')}
                onClick={props.onToggle}
        >
            <i></i>
        </button>
    )
}

export default Burger