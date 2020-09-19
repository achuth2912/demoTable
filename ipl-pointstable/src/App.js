import React, { Component } from 'react';
import AddForm from './AddForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-c2">
          <div className="container">
            <div className="wrap">
              <span className="title">IPL Points Table</span>
              <AddForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;