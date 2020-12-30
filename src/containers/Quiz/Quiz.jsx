import React, {Component} from "react";
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";


class Quiz extends Component {

    state = {
        isFinish: false,
        answerState: {},

        questionCounter: 0,
        quiz: [
            {
                id: 1,
                rightAnswer: 1,
                question: 'какое небо?',
                answers: [
                    {text: 'Вопрос 1', id: 1},
                    {text: 'Вопрос 2', id: 2},
                    {text: 'Вопрос 3', id: 3},
                    {text: 'Вопрос 4', id: 4},
                ]
            },
            {
                id: 2,
                rightAnswer: 2,
                question: 'какое небо, kek?',
                answers: [
                    {text: 'Вопрос 1', id: 1},
                    {text: 'Вопрос 2', id: 2},
                    {text: 'Вопрос 3', id: 3},
                    {text: 'Вопрос 4', id: 4},
                ]
            },
        ]
    }


    onHandleLinkClick = (id) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') return;

        }

        let counter = this.state.questionCounter
        const question = this.state.quiz[counter]
        if (question.rightAnswer === id) {

            this.setState({
                answerState: {[id]: 'success'}
            })

            setTimeout(() => {
                if (this.state.quiz.length === counter + 1) {
                    this.setState({
                            isFinish: true
                        }
                    )

                } else {
                    this.setState({
                        questionCounter: counter + 1,
                        answerState: null,
                    })
                }
                clearTimeout()
            }, 1000)

        } else {
            this.setState({
                answerState: {[id]: 'false'}
            })
        }

    }

    render() {
        return (

            <div className={classes.Quiz}>
                <div className={Quiz.wrapper}>
                    <h1>Welcome to Quiz</h1>
                    {
                        this.state.isFinish
                            ? <h2>FINISH</h2>
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.questionCounter].answers}
                                question={this.state.quiz[this.state.questionCounter].question}
                                onHandleLinkClick={this.onHandleLinkClick}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.questionCounter + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;
