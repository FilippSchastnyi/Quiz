import React, {Component} from "react";
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishQuiz from "../../components/FinishQuiz/FinishQuiz";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component {

    state = {
        results: {},
        loading: true,
        isFinish: false,
        answerState: {},
        answerLog: {},
        questionCounter: 0,
        quiz: [],
    }


    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
            const quiz = response.data

            this.setState({
                quiz: quiz,
                loading: false,
            })
        } catch (e) {
            console.log(e)
        }
    }

    onHandleLinkClick = (id) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') return;
        }

        let counter = this.state.questionCounter
        const question = this.state.quiz[counter]
        const results = this.state.results

        if (question.rightAnswerId === id) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[id]: 'success'},
                results
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
            results[question.id] = 'false'
            this.setState({
                answerState: {[id]: 'false'},
                results
            })
        }
    }

    retryHandler() {
        this.setState({
            questionCounter: 0,
            answerState: null,
            isFinish: false,
            results: {}

        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={Quiz.wrapper}>
                    <h1>Welcome to Quiz</h1>

                    {
                        this.state.loading
                            ? <Loader/>
                            : this.state.isFinish
                            ? <FinishQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler.bind(this)}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.questionCounter].answer}
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
