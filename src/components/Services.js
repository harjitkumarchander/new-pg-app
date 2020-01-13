import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div>
                <div className="trending-ads">
				<div className="container">
				{/* <!-- slider --> */}
				<div style={{fontFamily:"Alfa Slab One"}} className="agile-trend-ads">
							<ul id="flexiselDemo3">
								<li className="list-unstyled">
                                    <div className="row m-auto text-center">
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/wifi.jpg")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>High Speed Internet</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/breakfast.jpeg")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>Breakfast</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/security.jpeg")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>24x7 Security</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/cleaning.png")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>Regular Cleaning</h5>
										</div>
									</div>
                                    </div>
									</li>

								<li className="list-unstyled">
								<div className="row m-auto text-center">
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/power.png")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>24x7 Power Backup</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/parking.jpeg")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>2-Wheeler Parking</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/furnished.png")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>Fully Furnished</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<Link to="/">
											<img style={{height: "50px", width: "50px"}} src={require("../images/laundry.jpeg")} alt="" />
										</Link> 
										<div className="card-body w3-ad-info">
											<h5>Laundry</h5>
										</div>
									</div> 
									</div>
								</li>
						</ul>
					</div>   
			</div>
			</div>
            </div>
        )
    }
}
export default Services;