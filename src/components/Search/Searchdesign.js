import React, { Component } from 'react';
import Topbar from '../Topbar';
import Search from '../Search';
import Footer from '../Footer';

class Searchdesign extends Component {
  constructor(props){
    super(props);
    this.state = {
      user1 : [],
      user2 : [],
      city : ''
    }
  }

    render() {
      
        return (
            <div className="row" id="searchdesign">
            <Topbar />
            <div style={{fontFamily:"Alfa Slab One"}} className="d-flex flex-column ml-5 mt-5">

                <div style={{border : "1px solid black", borderRadius : "10px" , width: "250px"}} className="btn-group">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stay Types</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Hostels</option>
                    <option>Guest House</option>
                    <option>Lodges</option>
                    <option>Cottages</option>
                    <option>PG</option>
                </div>
                </div>

                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Available For</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>All</option>
                    <option>Boys/Men</option>
                    <option>Girls/Women</option>
                </div>
                </div>

                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Occupancy Type</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Sinlge</option>
                    <option>Double</option>
                    <option>Triple</option>
                    <option>Four Sharing</option>
                </div>
                </div>

                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Meals Included</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Yes</option>
                    <option>No</option>
                </div>
                </div>

                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Price Between</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>500 To 1000</option>
                    <option>1000 To 1500</option>
                    <option>1500 To 2000</option>
                    <option>2000 To 3000</option>
                    <option>3000 To 5000</option>
                </div>
                </div>
            </div>
                <Search />
            <Footer />
            </div>
        )
    }
}

export default Searchdesign;
