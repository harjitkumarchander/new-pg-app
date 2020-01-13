import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      search : ''
    }
  }
  handleSearch = (e) => {
    this.setState({
      search : e.target.value
    })
    console.log(e.target.value);
  }
    render() {
        return (
            <div className="container">
              <div style={{fontFamily:"Alfa Slab One"}} className="input-group input-group-lg">
                <div className="dropdown">
            <button className="btn btn-secondary btn-lg p-4 bg-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            City
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="/" className="dropdown-item" href="#">Jalandhar</Link>
              <Link to="/" className="dropdown-item" href="#">Amritsar</Link>
              <Link to="/" className="dropdown-item" href="#">Gurdaspur</Link>
            </div>
              </div>
                <div className="input-group-prepend"></div>
              <input style={{padding: "2.5rem 1rem", fontSize:"30px"}} type="text" value={this.state.search} onChange={this.handleSearch} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Find Your Perfact PG" />
              <button type="button" className="btn btn-secondary btn-lg bg-primary">Search</button>
              </div>
            </div>
        )
    }
}
export default Search;