import React, {Component} from 'react'
import Splash from '../components/Splash.js'
'use strict'

 export default class List extends Component {

  constructor(props){
    super(props)

    this.fetchData = this.fetchData.bind(this);
    this.saveAndUpdateState = this.saveAndUpdateState.bind(this);


    this.state = {
      cities : [],
      cityPass : []
    };

  }


    fetchData(e) {
      let url = 'https://young-falls-60611.herokuapp.com/api/search/temperature?temp='
      let endpoint = this.props.temperature
      console.log('poots');
     e.preventDefault();
     fetch(`${url}/${endpoint}`).then(results => {
       return results.json();
     }).then(data => {
       console.log(data);
       this.setState({cities: data});
     })
    }

    saveAndUpdateState(e) {
      e.preventDefault();
      console.log(e);
      let newStateValue = [e.target.className]
      this.setState({cities : newStateValue})
    }


render () {
  let testArray = this.state.cities;
  console.log(testArray)
   let test = testArray.map( (city) => {
        return (
  <div className="" key={city.name}>
    <form type ='submit'>
    <img src ="https://images.unsplash.com/photo-1482282375187-a7e57f76026d?dpr=1&auto=compress,format&fit=crop&w=1458&h=&q=80&cs=tinysrgb&crop=" />
    {city.name}
    <br/>
    <button className = {city.name} onClick={this.saveAndUpdateState}>View City</button>
  </form>
  </div>
        )
      })



    if (testArray.length > 1){
      return (
    <div className = "playList">
       <div>{test}</div>
       <button onClick={this.fetchData}>View</button>
     </div>
   )
   } else {
     return (
     <div className = "playList">
        <div>{this.state.cities}</div>
        <button onClick={this.fetchData}>View</button>
      </div>
    )
   }

  }
}
