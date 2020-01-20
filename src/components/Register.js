import React, { Component } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            resstate : '',
            city : '',
            postal_code: '',
            full_address : '',
            username : '',
            password : '',
            con_password : ''
        }
    }
    handleChangeRegister = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        return (
            <>
            <Topbar />
                    <div style={{fontFamily:"Alfa Slab One"}} className="container card card-outline-secondary mt-5 mb-5">
                        <div className="card-header">
                            <h3 className="mb-0 text-center">User Registration</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                    <div className="col-lg-9">
                                        <input style={{height : "60px"}} className="form-control" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChangeRegister} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div className="col-lg-9">
                                        <input style={{height : "60px"}} className="form-control" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChangeRegister} placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div className="col-lg-9">
                                        <input style={{height : "60px"}} className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChangeRegister} placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">State</label>
                                    <div className="col-lg-9">
                                        <select style={{height : "60px"}} className="form-control" name="resstate" value={this.state.resstate} onChange={this.handleChangeRegister} size="0">
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
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">City</label>
                                    <div className="col-lg-9">
                                        <select style={{height : "60px"}} className="form-control" name="city" value={this.state.city} onChange={this.handleChangeRegister} size="0">
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
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Postal Code</label>
                                    <div className="col-lg-9">
                                        <select style={{height : "60px"}} className="form-control" name="postal_code" value={this.state.postal_code} onChange={this.handleChangeRegister} size="0">
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
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Full Address</label>
                                    <div className="col-lg-9">
                                        <input style={{height : "60px"}} className="form-control" type="text" name="full_address" value={this.state.full_address} onChange={this.handleChangeRegister} placeholder="Type your Full Address" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Username</label>
                                    <div className="col-lg-9">
                                        <input style={{height : "60px"}} className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChangeRegister} placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                                    <div className="col-lg-9">
                                        <input style={{height : "60px"}} className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChangeRegister} placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Confirm</label>
                                    <div className="col-lg-9">
                                        <input style={{height : "60px"}} className="form-control" type="password" name="con_password" value={this.state.con_password} onChange={this.handleChangeRegister} placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-9">
                                        <input style={{marginRight : "10px"}}  type="reset" className="btn btn-secondary p-3" value="Cancel" />
                                        <input type="button" className="btn btn-primary p-3" value="Submit" onClick={this.handleClickRegister} />
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