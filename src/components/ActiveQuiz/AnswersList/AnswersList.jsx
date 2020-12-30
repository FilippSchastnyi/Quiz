import React from "react";
import classes from './AnswersList.module.scss'
import AnswersOptions from "./options/AnswersOptions";


const AnswersList = props => {

    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswersOptions
                        key={index}
                        answer={answer}
                        onHandleLinkClick={props.onHandleLinkClick}
                        state = {props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>
    )
}

export default AnswersList;
