import React from "react";
import classes from './Button.module.scss'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]

    return(
        <button className={cls.join(' ')}
                onClick={props.onClick}
        >{props.label}
        </button>
    )

}

export default Button