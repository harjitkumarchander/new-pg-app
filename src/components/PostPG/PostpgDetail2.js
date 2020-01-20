import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Topbar from '../Topbar';
import Footer from '../Footer';

export class PostpgDetail2 extends Component {
    constructor(){
        super();
        this.state = {
            state : '',
            city : '',
            full_address : '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        return (
            <>
            <Topbar />
            <div style={{borderRadius : "15px", height : "447px"}} className="container mt-5 mb-5 postpgdetail1">
                <h2 className="text-center">Post PG</h2>
                <form>
                    <div className="form-group">
					<label>State<span>*</span></label>
					    <select style={{height : "70px"}} className="form-control" name="state" onChange={this.handleChange} required="">
					        <option>Select State</option>
					        <option>Punjab</option>
					        <option>Rajasthan</option>
					        <option>Hareyna</option>
					    </select>
                    </div>
                    <div className="form-group">
					<label>City<span>*</span></label>
					    <select style={{height : "70px"}} className="form-control" name="city" onChange={this.handleChange} required="">
					        <option>Select City</option>
					        <option>Jalandhar</option>
					        <option>Kapurthla</option>
					        <option>Amritsar</option>
					    </select>
                    </div>
                    <div className="form-group">
                    <label>Full Address<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="full_address" onChange={this.handleChange} placeholder="Type your full address" required="" />
                    </div>
                    <Link to="/postpgdetail1"><Button className="continue_btn float-left" variant="primary" >Back</Button></Link>
                    <Link to="/postpgdetail3"><Button className="continue_btn float-right" variant="primary" >Continue</Button></Link>
                    </form>
            </div>
            <Footer />
            </>
        )
    }
}

export default PostpgDetail2
