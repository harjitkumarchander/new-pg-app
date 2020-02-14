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
              <div class="dropdown">
                <button type="button" class="btn border-white p-4 dropdown-toggle" data-toggle="dropdown">Top Cities</button>
                <div class="dropdown-menu">
                  <Link to="/searchdesign" class="dropdown-item" >Jalandhar</Link>
                  <Link to="/searchdesign" class="dropdown-item" >Amritsar</Link>
                  <Link to="/searchdesign" class="dropdown-item" >Chandigarh</Link>
                </div>
              </div>

              <div class="dropdown">
                <button type="button" class="btn border-white p-4 dropdown-toggle" data-toggle="dropdown">Rental Types</button>
                <div class="dropdown-menu">
                  <Link to="/searchdesign" class="dropdown-item" href="#">All</Link>
                  <Link to="/searchdesign" class="dropdown-item" href="#">Boys/Men</Link>
                  <Link to="/searchdesign" class="dropdown-item" href="#">Girls/Women</Link>
                  <Link to="/searchdesign" class="dropdown-item" href="#">For Family</Link>
                  <Link to="/searchdesign" class="dropdown-item" href="#">For Commercial</Link>
                </div>
              </div>


                {/* <div className="dropdown">
            <button className="btn btn-secondary btn-lg p-4 bg-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">City</button>
            <select className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="/" className="dropdown-item">Jalandhar</Link>
              <Link to="/" className="dropdown-item">Amritsar</Link>
              <Link to="/" className="dropdown-item">Gurdaspur</Link>
            </select>
              </div> */}
                <div className="input-group-prepend"></div>
              <input style={{padding: "2.25rem 1rem", borderRadius : "5px", fontSize:"25px"}} type="text" value={this.state.search} onChange={this.handleSearch} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Find Your Perfact PG" />
              <button style={{width : "150px", fontSize : "30px"}} type="button" className="btn btn-secondary btn-lg bg-primary">Search</button>
              </div>
            </div>
        )
    }
}
export default Search;