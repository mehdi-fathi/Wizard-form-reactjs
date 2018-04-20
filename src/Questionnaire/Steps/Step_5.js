import React, { Component } from 'react';
import store from "../js/store";

class App extends Component {
    constructor(props) {
        super(props);
        if(typeof store.getState().steps[4] != "undefined"){
            var input=store.getState().steps[4].body
        }
        this.state = {
            input: input
        };

    }
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 5</h2>
            <h3 class="fs-subtitle">What do your colleagues consider your main weaknesses to be?</h3>
            <textarea class="form-control" name="CAT_Custom_5" id="input" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);">
                 {this.state.input}
            </textarea>
        </div>
    );
  }
}

export default App;
