import React from 'react'
import classes from './FinishQuiz.module.scss'
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((item, index) => {
                    const cls = [
                        'fa',
                        props.results[item.id] === 'false' ? 'fa-times' : 'fa-check',
                        classes[props.results[item.id]]

                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>
                            {item.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry}
                        label='Повторить'
                />
                <Link to='/'>
                    <Button
                        label='К списку всех тестов!'
                        mode='green'
                    />
                </Link>
            </div>
        </div>
    )
}

export default FinishQuiz