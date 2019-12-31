import React, { Component } from 'react'

class Coments extends Component {
    render() {
        return (
            <div className="container">
                <div style={{fontFamily:"Alfa Slab One"}} className="row m-auto text-center">
                <div className="card col-lg-4 col-md-4 col-12 circle_img" style={{width: "18rem"}}>
  <img className="card-img-top" src={require("../images/comment1.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Harjit</h5>
    <p className="card-text">“I am having a comfortable stay at my accommodation which is provided by PPG. Since the past 4 years, I have been staying here and enjoying their quality services within an affordable budget”</p>
    
  </div>
</div>

<div className="card col-lg-4 col-md-4 col-12 circle_img" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Satish</h5>
    <p className="card-text">I am having a comfortable stay at my accommodation which is provided by PPG. Since the past 4 years, I have been staying here and enjoying their quality services within an affordable budget”</p>
    <img className="card-img-top" src={require("../images/comment2.jpeg")} alt="Card cap" />
  </div>
</div>

<div className="card col-lg-4 col-md-4 col-12 circle_img" style={{width: "18rem"}}>
  <img className="card-img-top" src={require("../images/comment3.jpeg")} alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Jatinder</h5>
    <p className="card-text">I am having a comfortable stay at my accommodation which is provided by PPG. Since the past 4 years, I have been staying here and enjoying their quality services within an affordable budget”</p>
  </div>
</div>
                </div>
            </div>
        )
    }
}
export default Coments;