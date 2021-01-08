import React from "react";
import classes from './Select.module.scss'
import SelectOptions from "./Select.options";


const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, index) => {
                    return (
                        <SelectOptions
                            key = {props.value + index}
                            value={option.value}
                            text={option.text}
                        />
                    )
                })}
            </select>
        </div>
    )
}

export default Select