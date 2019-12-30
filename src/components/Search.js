import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="container">
                

<div class="input-group input-group-lg">
<div class="dropdown">
  <button class="btn btn-secondary btn-lg bg-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    City
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Jalandhar</a>
    <a class="dropdown-item" href="#">Amritsar</a>
    <a class="dropdown-item" href="#">Gurdaspur</a>
  </div>
</div>
  <div class="input-group-prepend">
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
  <button type="button" class="btn btn-secondary btn-lg bg-primary">Search</button>
</div>
            </div>
        )
    }
}
export default Search;