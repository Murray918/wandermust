import React, {Component} from 'react'



export default class List extends Component {

  constructor(props){
    super(props)

    this.fetchData = this.fetchData.bind(this);

    this.state = {
      cities : []
    };

  }

componentDidMount() {
   fetch('https://young-falls-60611.herokuapp.com/api/cities')
   .then(results => results.json())
   .then(responseData => {
     this.setState({cities: responseData.results});
   })
   .catch((error) => {
     console.log("Error with Fetching : ", error);
   });
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
  let test = this.state.cities.map( (city, index) => {
        return (
  <div key={index}>
    {city.name}
  </div>
        );
      });
  return (
    <div className = "playList">
       <p>{test}</p>
       <button onClick={this.fetchData}>this is a button</button>
     </div>
   )
  }
}
