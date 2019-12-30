import React, { Component } from 'react'

class Coments extends Component {
    render() {
        return (
            <div className="container">
                <div className="row m-auto text-center">
                <div class="card col-lg-4 col-md-4 col-12 circle_img" style={{width: "18rem"}}>
  <img class="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div class="card-body">
    <h5 class="card-title">Harjit Kumar</h5>
    <p class="card-text">“I am having a comfortable stay at my accommodation which is provided by PPG. Since the past 4 years, I have been staying here and enjoying their quality services within an affordable budget”</p>
    
  </div>
</div>

<div class="card col-lg-4 col-md-4 col-12 circle_img" style={{width: "18rem"}}>
  
  <div class="card-body">
    <h5 class="card-title">Satish</h5>
    <p class="card-text">I am having a comfortable stay at my accommodation which is provided by PPG. Since the past 4 years, I have been staying here and enjoying their quality services within an affordable budget”</p>
    <img class="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  </div>
</div>

<div class="card col-lg-4 col-md-4 col-12 circle_img" style={{width: "18rem"}}>
  <img class="card-img-top" src={require("../images/city1.jpeg")} alt="Card cap" />
  <div class="card-body">
    <h5 class="card-title">Jatinder</h5>
    <p class="card-text">I am having a comfortable stay at my accommodation which is provided by PPG. Since the past 4 years, I have been staying here and enjoying their quality services within an affordable budget”</p>
  </div>
</div>
                </div>
            </div>
        )
    }
}
export default Coments;