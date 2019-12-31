import React, { Component } from 'react'

class Popularcities extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}} className="container-fluid p-0">

<div className="row m-auto text-center">
<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Jai Pur</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
</div>

<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city2.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Delhi</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
</div>

<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city3.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Mumbai</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
</div>

<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city4.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Kolkata</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
</div>

</div>
            </div>
        )
    }
}
export default Popularcities;