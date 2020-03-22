import React, { Component, Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import Topbar from './Topbar';
import Footer from './Footer';

toast.configure();

class Postpg extends Component {
    constructor() {
        super();
        this.state = {
            price: '',
            state: '',
            city: '',
            address: '',
            name: '',
            email: '',
            phone: '',
            file: null,
            imagePreviewUrl: '',
            emailError : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInputImage = (e) => {
        let {files} = e.target;
        this.setState({
            file: files[0]
        })
        if(files[0] !== undefined){
            this._handleImageChange(e)
        }
    }
    clearImage=()=>{
        this.setState({
            imagePreviewUrl: '',
            file: null
        })
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file)
      }

      validate=()=>{
          let validated = true
          let {state, city, address, name, phone, price, file, email} = this.state;
          if(state===''){
              validated = false;
              toast.error('Please select State',{position:toast.POSITION.TOP_RIGHT});
          }
          else if(city === ''){
              validated = false;
              toast.error('Please select City');
          }
          else if(name === ''){
            validated = false;
            toast.error('Type your name');
        }
          else if(email === '' || !email.includes('@') || !email.includes('.')){
            validated = false;
            toast.error('Please fill your valid Email ID');
          }
          else if(phone === '' || phone.length !== 10){
            validated = false;
            toast.error('Please fill your correct Mobile No.');
        }
          else if(price === ""){
            validated = false;
            toast.error('Fill price of your PG/Room');
          }
          else if(address === ''){
              validated = false;
              toast.error('Type address of your PG');
          }
          else if(file === null){
              validated = false;
              toast.error('Choose some Pics of your PG');
          }
          return validated ?
          toast.success('Submitted Successfully')
          : null
      }
    uploadData = () => {
       let validated = this.validate()
       if(validated){
        let fd = new FormData();
        fd.append('state', this.state.state);
        fd.append('city', this.state.city);
        fd.append('address', this.state.address);
        fd.append('name', this.state.name);
        fd.append('email', this.state.email);
        fd.append('price', this.state.price);
        fd.append('phone', this.state.phone);
        fd.append('file', this.state.file);

        let url = 'http://whispering-refuge-34674.herokuapp.com/api/pg';
        axios.post(url, fd)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('error while posting !', err)
            })
       }
    };
    render() {
        let {imagePreviewUrl} = this.state;
            return (
<>
    <Topbar />
    <div style={{borderRadius : "15px", height : "auto"}} className="container mt-4 mb-5 postpgdetail1">
        <h2 className="text-center ">Post PG</h2>
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="form-group">
                    <label>State<span>*</span></label>
                    <select style={{height : "70px"}} className="form-control" name="state" value={this.state.state}
                        onChange={this.handleChange} required="">
                        <option>Select State</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Hareyna</option>
                    </select>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="form-group">
                    <label>City<span>*</span></label>
                    <select style={{height : "70px"}} className="form-control" name="city" value={this.state.city}
                        onChange={this.handleChange} required="">
                        <option>Select City</option>
                        <option>Jalandhar</option>
                        <option>Kapurthla</option>
                        <option>Amritsar</option>
                    </select>
                </div>
            </div>
            
            <div className="col-md-6 col-sm-12">
                <div className="form-group">
                    <label>Name<span>*</span></label>
                    <input style={{height : "70px"}} type="text" className="form-control" name="name"
                        value={this.state.name} onChange={this.handleChange} placeholder="Type your full Name"
                        required="" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12">

                <div className="form-group">
                    <label>Email<span>*</span></label>
                    <input style={{height : "70px"}} type="text" className="form-control" name="email"
                        value={this.state.email} onChange={this.handleChange} placeholder="Enter Your Email address"
                        required="" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12">

            <div className="form-group">
                <label>Phone<span>*</span></label>
                <input style={{height : "70px"}} type="number" className="form-control" name="phone"
                    value={this.state.phone} onChange={this.handleChange} placeholder="Enter Your Phone Number"
                    required="" />
            </div>
            </div>
            <div className="col-md-6 col-sm-12">

                <div className="form-group">
                    <label>Price<span>*</span></label>
                    <input style={{height : "70px"}} type="number" className="form-control" name="price"
                        value={this.state.price} onChange={this.handleChange} placeholder="Enter Price" required="" />
                </div>
            </div>
            <div className="col-md-12 col-sm-12">
                <div className="form-group">
                    <label>Address<span>*</span></label>
                    <textarea rows="8" type="text" className="form-control" name="address"
                        value={this.state.address} onChange={this.handleChange} placeholder="Type your Address"
                        required="" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12">

                <div className="form-group">
                    <label>Photos<span>*</span></label>
                    <input style={{height : "70px"}} multiple type="file" className="form-control-file" name="file"
                        onChange={(e)=>{this.handleInputImage(e); }} required="" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-end align-items-center pull-right">
                {
                    imagePreviewUrl!==''?(
                        <Fragment>
                        <img alt="display" src={imagePreviewUrl} style={{width: '250px', height: 'auto', borderRadius: '25px'}}/>
                        <div style={{position: 'absolute', top: -15, right: 10, cursor: 'pointer'}} onClick={()=>{this.clearImage()}}><span style={{fontSize: '30px', color: '#999'}}>x</span></div>
                        </Fragment>
                    ):(
                        null
                    )
                }
            </div>
            <div className="col-md-12">
                <button className="btn btn-lg btn-primary pull-right m-5" onClick={this.uploadData}>Submit</button>
                </div>

        </div>
    </div>
    <Footer />
</>
)
}
}

export default Postpg;