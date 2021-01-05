import React from "react";
import classes from './Button.module.scss'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]

    if (props.mode === 'green') {
        cls.push(classes.green)
    }

    return (
        <button className={cls.join(' ')}
                onClick={props.onClick}
        >{props.label}
        </button>
    )

}

export default Button