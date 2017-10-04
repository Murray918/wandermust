import React, {Component} from 'react';
// Import Link <<<<<<<<<<<<
import {Link} from 'react-router-dom';


export default class List extends Component {
  console.log('props', this.props.status)
  let data = this.props.status;
  let List = data.map((status) => {
    let url = status.url;
    let endpoint = url.substr(url.lastIndexOf('s/*') - 1, 1);
    let characters = status.characters.map((characters) => {
      let endpoint = characters.substr(characters.indexOf("/satus/") + 7);
      return <li key={characters}>
          {/*Add a Link set to /charaters. Pass in the value of 'endpoint' for the text <<<<<<<<<<<<<<<<<*/}
          <Link to = "/status/">{endpoint}</Link>
      </li>
    })
    let starships = films.starships.map((starships) => {
      let endpoint = starships.substr(starships.indexOf("/api/") + 5);
      return <li key={starships}>
      </li>
    })
    render() {
  return (
    <div className="">
      <div className="">
        <h1 className="headings">Films</h1>
        <hr/>
      </div>
      {List}
    </div>
  );
  }
}

export default class Places extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'people': [],
    }
    componentDidMount(){
      let url ="https://young-falls-60611.herokuapp.com/status";
      // Fetch data from API
      fetch(url).then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({places: data.results})
      });
    }
    render() {
  return (
    <div className="app-body offset col-lg-10 col-lg-offset-1">
      <List people={this.state.people}/>
    </div>
  );
}
}
