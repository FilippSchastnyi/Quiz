import React, {Component} from 'react'
import classes from './Layout.module.scss'
import Quiz from "../../containers/Quiz/Quiz";

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <main>
                <Quiz/>
                </main>
            </div>
        )
    }
}

export default Layout;
