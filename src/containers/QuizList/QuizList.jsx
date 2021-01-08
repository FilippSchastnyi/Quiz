import React, {Component} from "react";
import classes from './QuizList.module.scss'
import QuizListOptions from "./QuizList.options";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-8b061-default-rtdb.firebaseio.com/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test № ${index + 1}`
                })
            })

            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                {this.state.loading
                    ? <Loader/>
                    : <ul>
                        {this.state.quizes.map(item => {
                            return (
                                <QuizListOptions
                                    key={item.id}
                                    to={'/quiz/' + item.id}
                                    name={item.name}
                                />
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }
}


export default QuizList
