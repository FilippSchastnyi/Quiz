import React, {Component} from "react";
import classes from './Nav.module.scss'
import Backdrop from "../UI/Backdrop/Backdrop";
import NavOptions from "./Nav.options";

class Nav extends Component {

    onHandleLinkClick() {
       this.props.onBackdropClick()
    }

    render() {
        const cls = [classes.Nav]
        const optionItems = [
            {to: '/auth', label: 'Авторизация', exact: true},
            {to: '/', label: 'Список', exact: false},
            {to: '/quiz-creator', label: 'Создать тест', exact: false}

        ]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
                <div className={cls.join(' ')}>
                    <aside>
                        <div>
                            <ul>
                                {optionItems.map((item, key) => {
                                    return (
                                        <NavOptions
                                            key={key}
                                            to={item.to}
                                            label={item.label}
                                            exact={item.exact}
                                            onClick={this.onHandleLinkClick.bind(this)}
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </aside>
                </div>
                {this.props.isOpen
                    ? <Backdrop
                        onBackdropClick={this.props.onBackdropClick}/>
                    : null}
            </React.Fragment>
        )
    }
}

export default Nav