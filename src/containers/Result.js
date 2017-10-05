import React, {Component} from 'react';
import List from 'react';
let data = List.state.city
'use strict'



class Result extends Component {

  constructor(){

this.seeWhatHadHappened = this.seeWhatHadHappened.bind(this);

}

seeWhatHadHappened() {
  console.log('the id is  ' + {data.id} 'the image city name is ' + data.name );
}

  render (){



    return seeWhatHadHappened()
  }
}

export default Result;
