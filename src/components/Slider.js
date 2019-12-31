import React, { Component } from 'react'

class Slider extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={require("../images/pg1.jpeg")} style={{ height : "550px" }} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Top Perfact PG</h5>
                          <p>With more than 13,720 PG to choose from, now you don't have to go anywhere.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={require("../images/pg2.jpeg")} style={{ height : "550px" }} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Top Perfact PG</h5>
                          <p>With more than 13,720 PG to choose from, now you don't have to go anywhere.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={require("../images/pg3.jpg")} style={{ height : "550px" }} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Top Perfact PG</h5>
                          <p>With more than 13,720 PG to choose from, now you don't have to go anywhere.</p>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default Slider;