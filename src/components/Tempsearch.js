import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar'
import Search from './Search';
import Footer from './Footer';

class Tempsearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      user1 : [],
      user2 : []
    }
  }

  componentDidMount(){
    fetch('http://whispering-refuge-34674.herokuapp.com/api/pg')
    .then(res=>res.json())
    .then(res=>{
      this.setState({
        user1 : res,
        user2 : res
      })
      // console.log(res)
    })
    .catch(error=>{
      console.log('error while fetching', error);
    })
  }

  handleSearch = (e) => {
    console.log(e);
    let user2 = [];
    for(const obj of this.state.user1){
      let city = obj.city
      if(e.target.value.toLowerCase() === city.substring(0, e.target.value.length).toLowerCase()){
        user2.push(obj)
      }
      console.log(obj);
    }
    this.setState({
      user2
    })
  }

  render() {
    return (
        <>
        <Topbar />
            <br />
            <div className="input-group-prepend"></div>
              <input style={{padding: "2.25rem 1rem", borderRadius : "5px", fontSize:"25px", width : "500px"}} type="text" onChange={this.handleSearch} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Find Your Perfact PG" />
              <button style={{width : "150px", fontSize : "30px"}} type="button" className="btn btn-secondary btn-lg bg-primary mb-5">Search</button>
            <br />
            <br />
            <div style={{fontFamily:"Alfa Slab One"}} className="">
            <div style={{marginLeft : "60px", fontFamily:"Alfa Slab One", width : "350px", float : "left"}} >
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

            {
                this.state.user2.map((v,i)=>{
                  let imageUrl = `http://whispering-refuge-34674.herokuapp.com/images/${v.image}`;
                  return(
                    <div className="container" key={i}>
                    <div className="row col-md-6 col-xs-12 display-table" style={{marginBottom:"10px"}}>
                    <img style={{height : "18rem"}} className="card-img-top" src={imageUrl} alt="Cardimage" />
                                <div className="card card-default card-body">
                                    {/* <h5 className="card-title">{v.name}</h5> */}
                                    {/* <p className="card-text">Name :-{v.name}</p> */}
                                    <p className="card-text">Address :- {v.address}</p>
                                    <p className="card-text">City :- {v.city}</p>
                                    <p className="card-text">State :- {v.state}</p>
                                    {/* <p className="card-text">Email :- {v.email}</p> */}
                                    {/* <p className="card-text">Phone :- {v.phone}</p> */}
                                    {/* <p className="card-text">Price :- {v.price}</p> */}
                                </div>
                            </div>
                            </div>
                  );

                })
              }
              </div>
           <Footer />
            </>
        )
    }
}

export default Tempsearch;
