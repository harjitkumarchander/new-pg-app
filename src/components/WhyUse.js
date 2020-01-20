import React, { Component } from 'react';

export class WhyUse extends Component {
    render() {
        return (
            <div style={{fontFamily:"Alfa Slab One"}} className="container p-0 why_use_container">

<div className="row m-auto text-center">
<div className=" col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
{/* <i style={{fontSize : "200px"}} className="fa fa-info-icon mr-1" aria-hidden="true"></i> */}
  <img style={{height: "75px", width : "75px"}} className="card-img-top" src={require("../images/broker.png")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Avoid Brokers</h5>
    <p className="card-text">We directly connect you to verified owners to save brokerage</p>
  </div>
</div>

<div className=" col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
<img style={{height: "75px", width : "75px"}} className="card-img-top" src={require("../images/shortlist.png")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Short List without Visit</h5>
    <p className="card-text">Extensive Information makes it easy</p>
  </div>
</div>

<div className=" col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
<img style={{height: "75px", width : "75px"}} className="card-img-top" src={require("../images/rentagreement.png")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">rental Agreement</h5>
    <p className="card-text">Assistance in creating Rental agreement &amp; Paper work</p>
  </div>
</div>

<div className=" col-lg-3 col-md-3 col-12" style={{width : "18rem"}}>
<img style={{height: "75px", width : "75px"}} className="card-img-top" src={require("../images/freelisting.png")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Free listing</h5>
    <p className="card-text">Easy listing process. Also using WhatsApp</p>
  </div>
</div>

</div>
            </div>
        )
    }
}

export default WhyUse
