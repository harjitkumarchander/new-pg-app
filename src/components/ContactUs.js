import React, { Component } from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

export class ContactUs extends Component {
    constructor(){
        super();
        this.state = {
            name2 : '',
            email2 : '',
            message2 : ''
        }
    }
    handleChangeContact = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <Topbar />
                    <div style={{fontFamily:"Alfa Slab One", paddingLeft : "0", paddingRight : "0"}} className="container col-md-4 card card-outline-primary mt-5 mb-5">
                        <div className="card-header info-color white-text bg-primary text-center">
                            <h3 className="mb-0 text-center">Contact Us</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <fieldset>
                                    <label className="mb-0">Name</label>
                                    <div className="row mb-1">
                                        <div className="col-sm-12">
                                            <input type="text" name="name2" id="name2" value={this.state.name2} onChange={this.handleChangeContact} className="form-control" required=""  />
                                        </div>
                                    </div>
                                    <label className="mb-0">Email</label>
                                    <div className="row mb-1">
                                        <div className="col-md-12 ">
                                            <input type="text" name="email2" id="email2" value={this.state.email2} onChange={this.handleChangeContact} className="form-control" required="" />
                                        </div>
                                    </div>
                                    <label className="mb-0">Message</label>
                                    <div className="row mb-1">
                                        <div className="col-md-12 ">
                                            <textarea rows="6" name="message2" id="message2" value={this.state.message2} onChange={this.handleChangeContact} className="form-control" required=""></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg float-right" onClick={this.handleClickContact}>Send Message</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
        )
    }
}

export default ContactUs
