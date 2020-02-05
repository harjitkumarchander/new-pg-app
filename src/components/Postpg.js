import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Topbar from './Topbar';
import Footer from './Footer';

class Postpg extends Component {
  constructor(){
    super();
    this.state = {
        description : '',
        pg_category : '',
        price : '',
        state : '',
        city : '',
        full_address : '',
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
  console.log(e.target.files[0].name)
  // this.setState({
  //     photos : e.target.files[0].name
  // })
}

uploadData = () => {
  let fd = new FormData();
  fd.append('state', this.state.state);
  fd.append('city', this.state.city);
  fd.append('address', this.state.address);
  fd.append('name', this.state.name);
  fd.append('email', this.state.email);
  fd.append('price', this.state.price);
  fd.append('phone', this.state.phone);
  fd.append('photos', this.state.photos);
  // console.log(fd);

  fetch('http://whispering-refuge-34674.herokuapp.com/api/pg',{
      method : 'POST',
      headers : {
          'Content-Type' : 'multipart/form-data'
      },
      body : JSON.stringify(fd)
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch((err) => {
      console.log(err);
  })
}

  render() {
    return (
      <>
            <Topbar />
            <div style={{borderRadius : "15px", height : "auto"}} className="container mt-5 mb-5 postpgdetail1">
                <h2 className="text-center">Post PG</h2>
                <form>
                    <div className="form-group">
					<label>State<span>*</span></label>
					    <select style={{height : "70px"}} className="form-control" name="state" value={this.state.state} onChange={this.handleChange} required="">
					        <option>Select State</option>
					        <option>Punjab</option>
					        <option>Rajasthan</option>
					        <option>Hareyna</option>
					    </select>
                    </div>
                    <div className="form-group">
					<label>City<span>*</span></label>
					    <select style={{height : "70px"}} className="form-control" name="city" value={this.state.city} onChange={this.handleChange} required="">
					        <option>Select City</option>
					        <option>Jalandhar</option>
					        <option>Kapurthla</option>
					        <option>Amritsar</option>
					    </select>
                    </div>
                    <div className="form-group">
                    <label>Address<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Type your Address" required="" />
                    </div>
                    <div className="form-group">
                    <label>Name<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Type your full Name" required="" />
                </div>
                <div className="form-group">
                    <label>Email<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Your Email address" required=""/>
                </div>
                <div className="form-group">
                    <label>Phone<span>*</span></label>
                        <input style={{height : "70px"}} type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Enter Your Phone Number" required="" />
                </div>
                <div className="form-group">
					<label>Price<span>*</span></label>
          <input style={{height : "70px"}} type="text" className="form-control" name="price" value={this.state.price} onChange={this.handleChange} placeholder="Enter Price" required="" />
					    {/* <select style={{height : "70px"}} className="form-control" name="pg_category" value={this.state.price} onChange={this.handleChange} required="">
					        <option>Select Price</option>
					        <option>1000 to 2000</option>
					        <option>2000 to 4000</option>
					        <option>5000 to more</option>
					    </select> */}
                    </div>
                <div className="form-group">
                    <label>Photos<span>*</span></label>
                        <input style={{height : "70px"}} multiple type="file" className="form-control-file" name="photos" onChange={this.handleInputImage} placeholder="Enter Your Phone Number" required=""/>
                </div>
                <Button style={{marginTop : "-30px"}} onClick={this.uploadData} className="continue_btn float-right" variant="primary" >Submit</Button>   
                </form>
            </div>
            <Footer />
            </>
    )
  }
}

export default Postpg;
