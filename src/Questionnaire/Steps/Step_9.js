import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 9</h2>
            <h3 class="fs-subtitle">What postgraduate qualifications do you hold?</h3>
            <textarea class="form-control" name="CAT_Custom_9" id="CAT_Custom_9" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
        </div>
    );
  }
}

export default App;
