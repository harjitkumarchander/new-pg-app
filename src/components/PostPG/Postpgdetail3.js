import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Topbar from '../Topbar';
import Footer from '../Footer';

class Postpgdetail3 extends Component {
    constructor(){
        super();
        this.state = {
            name : '',
            email : '',
            phone : '',
            photos : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    handleInputImage = (e) => {
        console.log(e.target.files)
        this.setState({
            photos : e.target.files[0]
        })
    }

    uploadData = () => {
        let fd = new FormData();
        fd.append('image', this.state.photos);
        fetch('----URL----',{
            method : 'POST',
            headers : {
                'Content-Type' : 'multipart/form-data'
            },
            body : fd
        })
        .then()
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <>
            <Topbar />
            <div style={{borderRadius : "15px", height : "auto"}} className="container mt-5 mb-5 postpgdetail1">
                <h2 className="text-center">Personal Details</h2>
                <form>
                <div className="form-group">
                    <label>Name<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="name" onChange={this.handleChange} placeholder="Type your full Name" required="" />
                </div>
                <div className="form-group">
                    <label>Email<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="Enter Your Email address" required=""/>
                </div>
                <div className="form-group">
                    <label>Phone<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="phone" onChange={this.handleChange} placeholder="Enter Your Phone Number" required="" />
                </div>
                <div className="form-group">
                    <label>Photos<span>*</span></label>
                        <input style={{height : "70px"}} multiple type="file" className="form-control-file" onChange={this.handleInputImage} placeholder="Enter Your Phone Number" required=""/>
                </div>
                <Link to="/postpgdetail2"><Button style={{marginTop : "-30px"}} className="continue_btn float-left" variant="primary">Back</Button></Link>
                <Button style={{marginTop : "-30px"}} onClick={this.uploadData} className="continue_btn float-right" variant="primary" >Submit</Button>
                </form>
                
            </div>
            <Footer />
            </>
        )
    }
}

export default Postpgdetail3
