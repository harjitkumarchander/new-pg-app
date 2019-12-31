import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="container">
<div style={{fontFamily:"Alfa Slab One"}} className="input-group input-group-lg">
<div className="dropdown">
  <button className="btn btn-secondary btn-lg p-4 bg-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    City
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Jalandhar</a>
    <a className="dropdown-item" href="#">Amritsar</a>
    <a className="dropdown-item" href="#">Gurdaspur</a>
  </div>
</div>
  <div className="input-group-prepend">
  </div>
  <input style={{padding: "2.5rem 1rem", fontSize:"30px"}} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Find Your Perfact PG" />
  <button type="button" className="btn btn-secondary btn-lg bg-primary">Search</button>
</div>
            </div>
        )
    }
}
export default Search;