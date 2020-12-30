import React from "react";
import classes from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span><strong>{props.answerNumber}</strong> {props.question} </span>
            <span>
                {props.answerNumber} из {props.quizLength}
            </span>
        </p>
        <AnswersList
            answers={props.answers}
            onHandleLinkClick={props.onHandleLinkClick}
            state = {props.state}
        />
    </div>
)

export default ActiveQuiz
