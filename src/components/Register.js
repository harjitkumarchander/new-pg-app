import React, { Component } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';

class Register extends Component {
    render() {
        return (
            <>
            <Topbar />
            {/* <div style={{width: "500px"}} className="container mt-5 mb-5">
<div className="card">
    <h5 className="card-header info-color bg-primary white-text text-center py-4">
        <strong>Sign up</strong>
    </h5>
    <div className="card-body px-lg-5 pt-0">
        <form className="text-center" style={{color: "#757575"}} action="#!">
            <div className="form-row pt-5">
                <div className="col">
                    <div className="md-form">
                        <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                        <label for="materialRegisterFormFirstName">First name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="md-form">
                        <input type="email" id="materialRegisterFormLastName" className="form-control" />
                        <label for="materialRegisterFormLastName">Last name</label>
                    </div>
                </div>
            </div>
            <div className="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail" className="form-control" />
                <label for="materialRegisterFormEmail">E-mail</label>
            </div>
            <div className="md-form">
                <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
                <label for="materialRegisterFormPassword">Password</label>
                <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>
            </div>
            <div className="md-form">
                <input type="password" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
                <label for="materialRegisterFormPhone">Phone number</label>
                <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="materialRegisterFormNewsletter" />
                <label className="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
            </div>
            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
            <p>or sign up with:</p>

            <Link to="/" type="button" className="btn-floating btn-fb btn-sm">
                <i style={{color: "#0275d8"}} className="fa fa-facebook-f"></i>
            </Link>
            <Link to="/" type="button" className="btn-floating btn-tw btn-sm">
                <i style={{color: "#0275d8"}} className="fa fa-twitter"></i>
            </Link>
            <Link to="/" type="button" className="btn-floating btn-li btn-sm">
                <i style={{color: "#0275d8"}} className="fa fa-linkedin"></i>
            </Link>
            <Link to="/" type="button" className="btn-floating btn-git btn-sm">
                <i style={{color: "#0275d8"}} className="fa fa-github"></i>
            </Link>
            <hr />
            <p>By clicking
                <em>Sign up</em> you agree to our
                <Link to="/" href="" target="_blank">terms of service</Link>
                </p>
        </form>
    </div>
    </div>
            </div> */}

<div style={{fontFamily:"Alfa Slab One", marginLeft : "50px", marginRight : "50px"}} class="card card-outline-secondary mt-5 mb-5">
                        <div class="card-header">
                            <h3 class="mb-0 text-center">User Registration</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" placeholder="First Name" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text"  placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">State</label>
                                    <div class="col-lg-9">
                                        <select id="user_time_zone" class="form-control" size="0">
                                            <option>Select State</option>
                                            <option> Punjab</option>
                                            <option> Punjab</option>
                                            <option> Punjab</option>
                                            <option> Punjab</option>
                                            <option> Punjab</option>
                                            <option> Punjab</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">City</label>
                                    <div class="col-lg-9">
                                        <select id="user_time_zone" class="form-control" size="0">
                                            <option>Select City</option>
                                            <option>Jalandhar</option>
                                            <option>Jalandhar</option>
                                            <option>Jalandhar</option>
                                            <option>Jalandhar</option>
                                            <option>Jalandhar</option>
                                            <option>Jalandhar</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Postal Code</label>
                                    <div class="col-lg-9">
                                        <select id="user_time_zone" class="form-control" size="0">
                                            <option>Select Postal Code</option>
                                            <option>144401</option>
                                            <option>144401</option>
                                            <option>144401</option>
                                            <option>144401</option>
                                            <option>144401</option>
                                            <option>144401</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Full Address</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" placeholder="Type your Full Address" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Username</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" placeholder="Username" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Confirm</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label"></label>
                                    <div class="col-lg-9">
                                        <input type="reset" class="btn btn-secondary" value="Cancel" />
                                        <input type="button" class="btn btn-primary" value="Save" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            <Footer />
            </>
        )
    }
}
export default Register;