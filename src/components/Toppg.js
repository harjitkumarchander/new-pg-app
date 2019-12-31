import React, { Component } from 'react'

class Toppg extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}} className="container p-0">

<div  className="row m-auto text-center">
<div className="card col-lg-4 col-md-4 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px", borderRadius: "50%"}} className="card-img-top" src={require("../images/pg1.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Jai Pur</h5>
    <p className="card-text">9, Jain Mandir Marg, Ganesh Colony, New Colony, Jhotwara, Jaipur, Jaipur, Rajasthan 302012</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
</div>

<div className="card col-lg-4 col-md-4 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px", borderRadius: "50%"}} className="card-img-top" src={require("../images/pg2.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Delhi</h5>
    <p className="card-text">Sangatrashan paharganj, Mantola Mohalla, Aram Bagh, Paharganj, New Delhi, Delhi 110055</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
</div>

<div className="card col-lg-4 col-md-4 col-12" style={{width : "18rem"}}>
  <img style={{height: "300px", borderRadius: "50%"}} className="card-img-top" src={require("../images/pg3.jpg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Mumbai</h5>
    <p className="card-text">109/20, RSC Rd Number 21, Charkop, Sector 1, Sector 1 Charkop, Kandivali, Mumbai, Maharashtra 400067</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
</div>
</div>
            </div>
        )
    }
}
export default Toppg;