import React, { Component } from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

export class Complaint extends Component {
    render() {
        return (
            <div>
                <Topbar />

                <div style={{fontFamily:"Alfa Slab One", marginLeft : "50px", marginRight : "50px"}} class="card card-outline-secondary mt-5 mb-5">
                        <div class="card-header">
                            <h3 class="mb-0 text-center">Complaint Registration</h3>
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
                                    <label class="col-lg-3 col-form-label form-control-label">Registration ID</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="email" placeholder="Registraion ID" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Complaint Type</label>
                                    <div class="col-lg-9">
                                        <select id="user_time_zone" class="form-control" size="0">
                                            <option>Select your Complaint</option>
                                            <option>Complaint</option>
                                            <option>Complaint</option>
                                            <option>Complaint</option>
                                            <option>Complaint</option>
                                            <option>Complaint</option>
                                            <option>Complaint</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Complaint</label>
                                    <div class="col-lg-9">
                                        <textarea class="form-control" type="email" placeholder="Complaint" />
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
            </div>
        )
    }
}

export default Complaint
