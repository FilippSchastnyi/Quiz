import React from "react";
import classes from './AnswersOptions.module.scss'



const AnswersOptions = props => {
    const cls = [classes.AnswersOptions]
    if(props.state){
        cls.push(classes[props.state])
    }

    return(
        <li className={cls.join(' ')} onClick={()=>{props.onHandleLinkClick(props.answer.id)}}>
            {props.answer.text}

        </li>
    )
}

export default AnswersOptions;
