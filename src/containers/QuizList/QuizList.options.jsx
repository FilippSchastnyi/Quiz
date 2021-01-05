import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class QuizListOptions extends Component {

    render() {
        return (
            <li >
                <NavLink

                    to={this.props.to}
                >
                    {this.props.name}
                </NavLink>
            </li>
        )
    }
}

export default QuizListOptions;
