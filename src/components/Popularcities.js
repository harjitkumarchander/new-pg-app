import React, { Component } from 'react'

class Popularcities extends Component {
    render() {
        return (
            <div className="container-fluid">

<div class="row m-auto text-center">
<div class="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img class="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div class="card-body">
    <h5 class="card-title">Jai Pur</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Explore</a>
  </div>
</div>

<div class="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img class="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div class="card-body">
    <h5 class="card-title">Delhi</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Explore</a>
  </div>
</div>

<div class="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img class="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div class="card-body">
    <h5 class="card-title">Mumbai</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Explore</a>
  </div>
</div>

<div class="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img class="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div class="card-body">
    <h5 class="card-title">Calcutta</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Explore</a>
  </div>
</div>

</div>
            </div>
        )
    }
}
export default Popularcities;