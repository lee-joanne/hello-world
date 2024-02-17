import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        this.setState((prevState) => ({ // use the previousState rather than the current state
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    //     this.setState({
    //         count: this.state.count + 1 // Need to use setState, changing the state directly will cause React to not rerender the component.
    //     }, () => {console.log("Callback value", this.state.count)})
    //     console.log("Before: ", this.state.count) // calls to setState are async
    } // when you need to execute code right AFTER the setState, call it inside the callback function as a 2nd parameter.

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
        <React.Fragment>
            <div>Count - {this.state.count}</div>
            <button onClick={()=> this.incrementFive()}>Increment</button>
        </React.Fragment>
    )
  }
}

export default Counter