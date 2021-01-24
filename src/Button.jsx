import React from 'react';
import classNames from 'classnames';

/*
class Button extends React.Component {
    render() {
        console.log(this.props); 
        return <button className={classNames('button', {
            'button--outline': this.props.outline,
        })}>{this.props.children}</button>;
    }
}
*/

function Button(props) {
    return (
        <button className={classNames('button', {
            'button--outline': props.outline,
        })}>
            {props.outline}
        </button>
    );
}

export default Button;