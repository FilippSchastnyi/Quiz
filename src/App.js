import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreatot";
import QuizList from "./containers/QuizList/QuizList";
import Quiz from "./containers/Quiz/Quiz";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path='/auth' component={Auth}/>
                        <Route path='/quiz-creator' component={QuizCreator}/>
                        <Route path='/quiz/:id' component={Quiz}/>
                        <Route path='/' component={QuizList}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}


export default App;
