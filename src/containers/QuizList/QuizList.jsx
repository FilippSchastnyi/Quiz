import React, {Component} from "react";
import classes from './QuizList.module.scss'
import QuizListOptions from "./QuizList.options";

class QuizList extends Component {

    render() {
        const list = [1, 2, 3]
        return (
            <div className={classes.QuizList}>
                <ul>
                    {list.map((item, index) => {
                        return (
                            <QuizListOptions
                                key={index}
                                to={'/quiz/' + item}
                                name={'Тест №' + item}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default QuizList;
