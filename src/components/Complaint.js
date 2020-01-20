import React, { Component } from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

export class Complaint extends Component {
    constructor(){
        super();
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            resid : '',
            comptype : '',
            complaint : ''
        }
    }

    handleChangeComplaint = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <Topbar />
                <div style={{fontFamily:"Alfa Slab One"}} className="container card card-outline-secondary mt-5 mb-5">
                        <div className="card-header">
                            <h3 className="mb-0 text-center">Complaint Registration</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChangeComplaint} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChangeComplaint} placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChangeComplaint} placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Registration ID</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="email" name="resid" value={this.state.resid} onChange={this.handleChangeComplaint} placeholder="Registraion ID" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Complaint Type</label>
                                    <div className="col-lg-9">
                                        <select id="user_time_zone" className="form-control" name="comptype" value={this.state.comptype} onChange={this.handleChangeComplaint} size="0">
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
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Complaint</label>
                                    <div className="col-lg-9">
                                        <textarea className="form-control" type="text" name="complaint" value={this.state.complaint} onChange={this.handleChangeComplaint} placeholder="Complaint" />
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-9">
                                        <input style={{marginRight : "10px"}} type="reset" className="btn btn-secondary" value="Cancel" />
                                        <input type="button" className="btn btn-primary" value="Save" />
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
