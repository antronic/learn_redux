import React from 'react'
import {Helmet} from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'

// set document of browser title
// it will render this before Helmet
document.title = 'Counter with React'

class App extends React.Component {
  onIncrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  render() {
    return (
      <div>
        <style jsx>{
          `
          html, body {
            background-color: #ecf0f1;
          }
          #counter {
            background-color: #95a5a6;
            color: #efefef;
            margin-top: 1em;
            padding-top: 1em;
            padding-bottom: 1em;
            border-radius: 8px;
          }
          `
        }</style>
        <Helmet>
          <title>Counter with React</title>
        </Helmet>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-8 offset-2">
              <h1>Counter with React</h1>
              <h2 id="counter" className="col-4 offset-4">
                {this.props.value}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <button 
                className="btn btn-success"
                onClick={this.props.onIncrement}>+</button>
              <button 
                className="btn btn-danger"
                onClick={this.props.onDecrement}>-</button>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <button
                className="btn btn-warning"
                onClick={this.onIncrementIfOdd.bind(this)}>IF ODD</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App