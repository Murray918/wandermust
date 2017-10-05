import React, {Component} from 'react'
'use strict'

export default class List extends Component {

  constructor(props){
    super(props)

    this.fetchData = this.fetchData.bind(this);
    this.seeWhatHadHappened = this.seeWhatHadHappened.bind(this);


    this.state = {
      cities : [],
      cityPass : []
    };

  }


    fetchData(e) {
      console.log('poots');
     e.preventDefault();
     fetch('https://young-falls-60611.herokuapp.com/api/cities').then(results => {
       return results.json();
     }).then(data => {
       console.log(data);
       this.setState({cities: data});
     })
    }

    saveAndUpdateState(e) {
      e.preventDefault();
      console.log(e);
    }


render () {
  let testArray = this.state.cities;
  console.log(testArray);
   let test = testArray.map( (city) => {
     console.log(index);
        return (
  <div className="" key={city.name}>
    <img src ="https://images.unsplash.com/photo-1482282375187-a7e57f76026d?dpr=1&auto=compress,format&fit=crop&w=1458&h=&q=80&cs=tinysrgb&crop=" />
    {city.name}
    <br/>
    <button onClick={this.saveAndUpdateState}>View City</button>
  </div>
        );
      });
  return (
    <div className = "playList">
       <div>{test}</div>
       <button onClick={this.fetchData}>View</button>
     </div>
   )
  }
}
