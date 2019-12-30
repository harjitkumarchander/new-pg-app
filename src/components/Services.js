import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div>
                <div className="trending-ads">
				<div className="container">
				{/* <!-- slider --> */}
				<div className="agile-trend-ads">
							<ul id="flexiselDemo3">
								<li className="list-unstyled">
                                    <div className="row m-auto text-center">
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/wifi.jpg")} alt="" />
										</a> 
										<div className="card-body w3-ad-info">
											<h5>High Speed Internet</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/breakfast.jpeg")} alt="" />
										</a> 
										<div className="w3-ad-info">
											<h5>Breakfast</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/security.jpeg")} alt="" />
										</a> 
										<div className="w3-ad-info">
											<h5>24x7 Security</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/cleaning.png")} alt="" />
										</a> 
										<div className="w3-ad-info">
											<h5>Regular Cleaning</h5>
										</div>
									</div>
                                    </div>
									</li>

								<li className="list-unstyled">
								<div className="row m-auto text-center">
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/power.png")} alt="" />
										</a> 
										<div className="w3-ad-info">
											<h5>24x7 Power Backup</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/parking.jpeg")} alt="" />
										</a> 
										<div className="w3-ad-info">
											<h5>2-Wheeler Parking</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/furnished.png")} alt="" />
										</a> 
										<div className="w3-ad-info">
											<h5>Fully Furnished</h5>
										</div>
									</div>
									<div className="col-md-3 biseller-column">
										<a>
											<img src={require("../images/laundry.jpeg")} alt="" />
										</a> 
										<div className="w3-ad-info">
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