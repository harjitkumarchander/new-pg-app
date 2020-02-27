import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
            <div>
            <Topbar />
                <br />
                
                <br />
                <br />
            <div style={{fontFamily:"Alfa Slab One"}} className="container-fluid sidebarcontainer">

                <div style={{marginLeft : "60px",width : "350px", fontFamily:"Alfa Slab One"}} className="container postion-absolute">
                <div style={{border : "1px solid black", borderRadius : "10px" , width: "250px"}} className="row btn-group">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stay Types</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Hostels</option>
                    <option>Guest House</option>
                    <option>Lodges</option>
                    <option>Cottages</option>
                    <option>PG</option>
                </div>
                </div>
                <br />
                <br />
                <br />
                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Available For</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>All</option>
                    <option>Boys/Men</option>
                    <option>Girls/Women</option>
                </div>
                </div>
                <br />
                <br />
                <br />
                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Occupancy Type</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Sinlge</option>
                    <option>Double</option>
                    <option>Triple</option>
                    <option>Four Sharing</option>
                </div>
                </div>
                <br />
                <br />
                <br />
                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Meals Included</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Yes</option>
                    <option>No</option>
                </div>
                </div>
                <br />
                <br />
                <br />
                <div style={{border : "1px solid black", borderRadius : "10px", width: "250px"}} className="btn-group">
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

                {/* <div className="searchdesign col md-10 row d-flex text-justify">
                <div className="col-md-4 col-xs-12"> 
                    <img style={{height: "300px"}} className="card-img-top" src={require("../../images/city1.jpeg")} alt="Card cap" />
                    <div className="card-body">
                      <h5 className="card-title">Jai Pur</h5>
                      <p className="card-text">Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. </p>
                      <Link to="/" href="#" className="btn btn-primary">Explore</Link>
                    </div>
                  </div>
                  
                  <div className="col-md-4 col-xs-12">
                    <img style={{height: "300px"}} className="card-img-top" src={require("../../images/city2.jpeg")} alt="Card cap" />
                    <div className="card-body">
                      <h5 className="card-title">Delhi</h5>
                      <p className="card-text">Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. </p>
                      <Link to="/" href="#" className="btn btn-primary">Explore</Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12">
                  <img style={{height: "300px"}} className="card-img-top" src={require("../../images/city3.jpeg")} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Mumbai</h5>
                    <p className="card-text">Mumbai is a densely populated city on India’s west coast. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva.</p>
                    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
                  </div>
                </div>

                <div className="col-md-4 col-xs-12">
                  <img style={{height: "300px"}} className="card-img-top" src={require("../../images/city4.jpeg")} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Kolkata</h5>
                    <p className="card-text">Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.</p>
                    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <img style={{height: "300px"}} className="card-img-top" src={require("../../images/city4.jpeg")} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Kolkata</h5>
                    <p className="card-text">Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.</p>
                    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <img style={{height: "300px"}} className="card-img-top" src={require("../../images/city4.jpeg")} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Kolkata</h5>
                    <p className="card-text">Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.</p>
                    <Link to="/" href="#" className="btn btn-primary">Explore</Link>
                  </div>
                </div>
                </div> */}

{/* {
              this.state.user2.map((v,i)=>{
                  let imageUrl = `http://whispering-refuge-34674.herokuapp.com/images/${v.image}`;
                  return(
                    <div className="text-justify" key={i}>
                    <div style={{float: "left"}} className="card col-md-4">
                                <img style={{height : "18rem"}} className="card-img-top" src={imageUrl} alt="Cardimage" />
                                <div className="card-body">
                                    <h5 className="card-title">{v.name}</h5>
                                    <p className="card-text">Name :-{v.name}</p>
                                    <p className="card-text">Address :- {v.address}</p>
                                    <p className="card-text">City :- {v.city}</p>
                                    <p className="card-text">State :- {v.state}</p>
                                    <p className="card-text">Email :- {v.email}</p>
                                    <p className="card-text">Phone :- {v.phone}</p>
                                    <p className="card-text">Price :- {v.price}</p>
                                </div>
                            </div>
                            </div>
                  );

                })
              } */}
            </div>
            <div className="searchcontainer">
                <Search />
                </div>
            <br />
            <br />
            <Footer />
            </div>
        )
    }
}

export default Searchdesign;
