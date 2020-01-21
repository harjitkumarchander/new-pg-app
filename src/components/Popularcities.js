import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Popularcities extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}} className="container-fluid p-0">

<div className="row m-auto text-center">
<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Jai Pur</h5>
    <p className="card-text">Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. </p>
    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
  </div>
</div>

<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city2.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Delhi</h5>
    <p className="card-text">Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. </p>
    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
  </div>
</div>

<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city3.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Mumbai</h5>
    <p className="card-text">Mumbai is a densely populated city on India’s west coast. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva.</p>
    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
  </div>
</div>

<div className="card col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px"}} className="card-img-top" src={require("../images/city4.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Kolkata</h5>
    <p className="card-text">Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.</p>
    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
  </div>
</div>

</div>
            </div>
        )
    }
}
export default Popularcities;