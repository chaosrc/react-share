import React from 'react'


export const Button = (props) => {
    return (
        <button onClick={props.onClick && props.onClick} ></button>
    )
}

export const Button1 = (props) => {
    const handleClick = () => console.log('clicked') 
    return (
        <button onClick={handleClick} {...porps}></button>
    )
}


export class Button2 extends React.Component {
    constructor(porps) {
        super(props)
        this.handleClick.bind(this)
    }
    handleClick() {
        console.log('click', this.props)
    }
    hanldeTouchStart =  () => {
        console.log('touch', this.props)
    }
    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}
