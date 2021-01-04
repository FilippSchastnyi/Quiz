import React, {Component} from 'react'
import classes from './Layout.module.scss'
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

    onBackdropClick() {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Nav
                    isOpen={this.state.isOpen}
                    onBackdropClick={this.onBackdropClick.bind(this)}
                />
                <Burger
                    onToggle={this.handleBurgerClick.bind(this)}
                    isOpen={this.state.isOpen}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;
