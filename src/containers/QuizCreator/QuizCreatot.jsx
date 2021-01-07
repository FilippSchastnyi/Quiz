import React, {Component, Fragment} from "react";
import classes from './QuizCreatot.module.scss'
import Button from "../../components/UI/Button/Button";
import createControl from "../../formFramework/formFramework";
import Input from "../../components/UI/Input/Input";

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым'
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

    submitHandler(event) {
        event.preventDefault()
    }

    addQuestionHandler() {

    }

    createQuizHandler() {

    }

    changeHandler = (value, controlName) => {

    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => {
                        this.changeHandler(event.target.value, controlName)
                    }}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div className={classes.Wrapper}>
                    <h2>Создание теста</h2>

                    <form onSubmit={this.submitHandler.bind(this)}>

                        {this.renderControls()}

                        <select> </select>

                        <Button
                            label='Добавить вопрос'
                            onClick={this.addQuestionHandler.bind(this)}
                        />
                        <Button
                            type='green'
                            label='Создать тест'
                            onClick={this.createQuizHandler.bind(this)}
                        />
                    </form>
                </div>
            </div>
        )
    }
}


export default QuizCreator;
