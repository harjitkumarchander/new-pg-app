import React, { Component } from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

export class ContactUs extends Component {
    render() {
        return (
            <div>
                <Topbar />
                 {/* <!-- form user info --> */}
                    <div style={{fontFamily:"Alfa Slab One"}} class="card card-outline-secondary mt-5 mb-5 ml-5 mr-5">
                        <div class="card-header">
                            <h3 class="mb-0 text-center">Contact Us</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <fieldset>
                                    <label for="name2" class="mb-0">Name</label>
                                    <div class="row mb-1">
                                        <div class="col-lg-12">
                                            <input type="text" name="name2" id="name2" class="form-control" required=""  />
                                        </div>
                                    </div>
                                    <label for="email2" class="mb-0">Email</label>
                                    <div class="row mb-1">
                                        <div class="col-lg-12">
                                            <input type="text" name="email2" id="email2" class="form-control" required="" />
                                        </div>
                                    </div>
                                    <label for="message2" class="mb-0">Message</label>
                                    <div class="row mb-1">
                                        <div class="col-lg-12">
                                            <textarea rows="6" name="message2" id="message2" class="form-control" required=""></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-secondary btn-lg float-right">Send Message</button>
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
