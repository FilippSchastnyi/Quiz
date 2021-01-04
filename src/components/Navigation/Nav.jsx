import React, {Component} from "react";
import classes from './Nav.module.scss'
import Backdrop from "../UI/Backdrop/Backdrop";

class Nav extends Component {


    onBackdropClick(){
        console.log('hello')
    }

    render() {
        const cls = [classes.Nav]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
                <div className={cls.join(' ')}>
                    <aside>
                        <div>
                            <ul>

                            </ul>
                        </div>
                    </aside>
                </div>
                {this.props.isOpen
                    ? <Backdrop
                    onBackdropClick = {this.props.onBackdropClick}/>
                    : null}
            </React.Fragment>
        )
    }
}

export default Nav