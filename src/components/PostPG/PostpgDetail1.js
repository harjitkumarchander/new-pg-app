import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Topbar from '../Topbar';
import Footer from '../Footer';
class PostpgDetail1 extends Component {
    constructor(){
        super();
        this.state = {
            description : '',
            pg_category : '',
            price : ''
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
					<label>Select Properties<span>*</span></label>
					    <select style={{height : "70px"}} className="form-control" name="pg_category" onChange={this.handleChange} required="">
					        <option>Select PG Category</option>
					        <option>Only 1</option>
					        <option>2 to 4</option>
					        <option>5 to more</option>
					    </select>
                    </div>
                    <div className="form-group">
					<label>Price<span>*</span></label>
					    <select style={{height : "70px"}} className="form-control" name="pg_category" onChange={this.handleChange} required="">
					        <option>Select Price</option>
					        <option>1000 to 2000</option>
					        <option>2000 to 4000</option>
					        <option>5000 to more</option>
					    </select>
                    </div>
                    <div className="form-group">
                    <label>Description<span>*</span></label>
                        <textarea style={{height : "70px"}} className="form-control" type="text" placeholder="Description" name="description" onChange={this.handleChange} required="" /><br />
                    </div>
                        <Link to="/postpgdetail2"><Button className="continue_btn" variant="primary">Continue</Button></Link>
                    
                </form>
            </div>
            <Footer />
            </>
        )
    }
}

export default PostpgDetail1
