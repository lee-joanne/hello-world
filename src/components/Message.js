import React, {Component} from "react";


class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        } // initial state
    }
    
    changeMessage () {
       this.setState({
            message: "Thank you for subscribing!"
       }) // state changed after on click event
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message