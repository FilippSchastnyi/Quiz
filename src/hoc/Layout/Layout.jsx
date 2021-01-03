import React, {Component} from 'react'
import classes from './Layout.module.scss'
import Quiz from "../../containers/Quiz/Quiz";
import Burger from "../../components/UI/Burger/Burger";
import Nav from "../../components/Navigation/Nav";

class Layout extends Component {
    state = {
        isOpen: false
    }

    handleBurgerClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Nav
                isOpen = {this.state.isOpen}
                />
                <Burger
                    onToggle={this.handleBurgerClick.bind(this)}
                    isOpen={this.state.isOpen}
                />
                <main>
                    <Quiz/>
                </main>
            </div>
        )
    }
}

export default Layout;
