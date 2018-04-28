import React, { Component } from 'react';
import store from "../js/store";
import {setInput} from "./Fill_Input";

class App extends Component {
    constructor(props) {
        super(props);
        var PreValue=setInput(store.getState().steps[this.props.counter]);

        this.state = {
            input: PreValue
        };

    }
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 3</h2>
            <h3 class="fs-subtitle">What have been your main achievements?</h3>
            <textarea class="form-control" name="CAT_Custom_3" id="input" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);">
                {this.state.input}
            </textarea>
        </div>
    );
  }
}

export default App;
