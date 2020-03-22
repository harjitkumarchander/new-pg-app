import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';

const demoImage = 'https://via.placeholder.com/450x350/';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      user1 : [],
      user2 : [],
      loader : false,
      text : '',
      suggestions : [],
      showSearchBox : false,
      selectlist : ''
    }
  }

  toggleLoader = () => {
    this.setState({
      loader : !this.state.loader
    })
  }

  componentDidMount(){
      this.toggleLoader()
    fetch('http://whispering-refuge-34674.herokuapp.com/api/pg')
    .then(res=>res.json())
    .then(res=>{
      let tempArr = []
      for(let obj of res) {
        if(obj.state !== undefined) {
          tempArr.push(obj);
        }
      }
      this.setState({
        user1 : tempArr,
        user2 : tempArr
      },()=>{this.toggleLoader()})
    })
    .catch(error=>{
      console.log('error while fetching', error);
    })
  }

  handleSearch = (e) => {
    let user2 = [];
    for(const obj of this.state.user1){
      let city = obj.city
      if(e.target.value.toLowerCase() === city.substring(0, e.target.value.length).toLowerCase()){

        user2.push(obj)
      }
    }
    this.setState({
      user2
    })
  }

 handleClickSearch = () =>{
  this.setState({
    showSearchBox : false
  })
 }

 handleList = () => {
   this.setState({
     user2 : []
   })
 }
    render() {
      let filteredList = this.state.user2

        return (
          <div className="row">

            {/* Sidebar */}

            {/* <div style={{fontFamily:"Alfa Slab One"}} className="searchdesign d-flex align-items-center flex-column mt-5">

                <div style={{border : "1px solid #ccc", borderRadius : "10px" , width: "250px"}} className="btn-group">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stay Types</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Hostels</option>
                    <option>Guest House</option>
                    <option>Lodges</option>
                    <option>Cottages</option>
                    <option>PG</option>
                </div>
                </div>

                <div style={{border : "1px solid #ccc", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Available For</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>All</option>
                    <option>Boys/Men</option>
                    <option>Girls/Women</option>
                </div>
                </div>

                <div style={{border : "1px solid #ccc", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Occupancy Type</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Sinlge</option>
                    <option>Double</option>
                    <option>Triple</option>
                    <option>Four Sharing</option>
                </div>
                </div>

                <div style={{border : "1px solid #ccc", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Meals Included</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>Yes</option>
                    <option>No</option>
                </div>
                </div>

                <div style={{border : "1px solid #ccc", borderRadius : "10px", width: "250px"}} className="btn-group mt-5">
                    <button className="btn  btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Price Between</button>
                <div style={{width : "250px"}} className="dropdown-menu">
                    <option>500 To 1000</option>
                    <option>1000 To 1500</option>
                    <option>1500 To 2000</option>
                    <option>2000 To 3000</option>
                    <option>3000 To 5000</option>
                </div>
                </div>
            </div> */}

            <div className="container mt-5">
              <Loader loader={this.state.loader} />
              <div style={{fontFamily:"Alfa Slab One"}} className="input-group input-group-lg d-flex">

              <div className="dropdown col-md-2 col-sm-12">
                <button type="button" className="btn border-white p-4 dropdown-toggle" data-toggle="dropdown">Top Cities</button>
                <div className="dropdown-menu">
                  <Link to="/searchdesign" className="dropdown-item" >Jalandhar</Link>
                  <Link to="/searchdesign" className="dropdown-item" >Amritsar</Link>
                  <Link to="/searchdesign" className="dropdown-item" >Chandigarh</Link>
                </div>
              </div>

              <div className="dropdown col-md-2 col-sm-12">
                <button type="button" className="btn border-white p-4 dropdown-toggle" data-toggle="dropdown">Rental Types</button>
                <div className="dropdown-menu">
                  <Link to="/searchdesign" className="dropdown-item" href="#">All</Link>
                  <Link to="/searchdesign" className="dropdown-item" href="#">Boys/Men</Link>
                  <Link to="/searchdesign" className="dropdown-item" href="#">Girls/Women</Link>
                  <Link to="/searchdesign" className="dropdown-item" href="#">For Family</Link>
                  <Link to="/searchdesign" className="dropdown-item" href="#">For Commercial</Link>
                </div>
              </div>
              <div className="col-md-8 col-sm-12 d-flex">
                <input style={{padding: "2.25rem 1rem", borderRadius : "5px", fontSize:"25px"}} type="text" onChange={this.handleSearch} onFocus={()=>this.setState({showSearchBox : true})} onBlur={()=>this.setState({showSearchBox : false})} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Find Your Perfact PG" />
                <button style={{width : "150px", fontSize : "38px"}} type="button" onClick={this.handleClickSearch} className="btn btn-secondary btn-lg bg-primary mb-5">Search</button>
              </div>
              </div>

              {/* Search result box */}

            {this.state.showSearchBox ? 

              <div className="container p-0 col-md-8 col-sm-12 searchlistcontainer">
                {
                  filteredList.map((v,i)=>{
                    let imageUrl = `http://whispering-refuge-34674.herokuapp.com/images/${v.image}`;
                    return(
                <ul key={i} className="list-group" id="selectList" >
                  <div className="row" value={this.state.selectlist}>
                    <li onClick={this.handleList} className="list-group-item p-0 d-flex" ><img src={imageUrl} alt="picImage" />
                    <p className="ml-2 text-center">{v.city}</p>
                    </li>
                  </div>
                </ul>
                    );
                  })
                }

              </div>

              :null
                
              }

              {/* Search result map */}

              <div className="row">
              {/* {
                this.state.user1.map((v,i)=>{
                  let imageUrl = `http://whispering-refuge-34674.herokuapp.com/images/${v.image}`;
                  return(
                    <div key={i} className="col-md-6">
                        <div className="card d-flex justify-contet-center align-items-center">
                          <img style={{height : "18rem", width : "25rem"}} className="d-flex" src={imageUrl} alt="Cardimage" onError={(e)=>{e.target.src=demoImage; e.target.onerror=null}}/>
                          <div className="">
                            <p className="card-text">Address :- {v.address}</p>
                            <p className="card-text">City :- {v.city}</p>
                            <p className="card-text">State :- {v.state}</p>
                          </div>
                        </div>
                    </div>
                  );
                })
              } */}
              </div>
            </div> 
            </div>
        )
    }
}
export default Search;