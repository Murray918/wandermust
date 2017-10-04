import React, {Component} from 'react';
// Import Link <<<<<<<<<<<<
import {Link} from 'react-router-dom';






  componentDidMount(){
    let url ="https://young-falls-60611.herokuapp.com/status";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({places: data.results})
    });
  }


  export default class Places extends Component {
    constructor(props) {
      super(props);
      this.state = {
        'people': [],
      }
}


export default class List extends Component {
  constructor(props){
    render(prop)
  }
}
