import React, {Component} from 'react';
import List from './List.js';

// let data = List.state.cityPass;
'use strict'



class Result extends Component {

  constructor(){
    super()
this.seeWhatHadHappened = this.seeWhatHadHappened.bind(this);

}

seeWhatHadHappened() {
  console.log('the id is  ' + List.state.cityPass + 'the image city name is ');
}

  render (){



    return (
     <div onClick = {this.seeWhatHadHappened}>Hello</div>
    )
  }
}

export default Result;
