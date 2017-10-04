import React, {Component} from 'react'

'use strict'

export default class List extends Component {

  constructor(props){
    super(props)

    this.fetchData = this.fetchData.bind(this);


    this.state = {
      cities : []
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


render () {
  let testArray = this.state.cities;
  console.log(testArray);
   let test = testArray.map( (city) => {
        return (
  <div className="" key={city.name}>
    <img src ="https://images.unsplash.com/photo-1482282375187-a7e57f76026d?dpr=1&auto=compress,format&fit=crop&w=1458&h=&q=80&cs=tinysrgb&crop=" />
    {city.name}
  </div>
        );
      });
  return (
    <div className = "playList">
       <div>{test}</div>
       <button onClick={this.fetchData}>this is a button</button>
     </div>
   )
  }
}
