import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Topbar extends Component {
    render() {
        return (
            <>
               <header style={{marginBottom : "0rem", marginTop : "0rem"}}>
                    <nav style={{padding: "0rem 0rem"}} className="navbar navbar-expand-lg navbar-light bg-primary">
  <Link to="/" className="navbar-brand"><img style={{width: "200px", height : "80px"}} src={require("../images/logo1.png")} alt="logo"></img></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul style={{marginBottom : "0rem",marginRight: "1rem", fontSize: "1.2rem", fontFamily:"Alfa Slab One"}} className="navbar-nav ml-auto">
    <li className="nav-item active">
        <Link to="/" className="nav-link text-white mr-3" href="#"><i className="fa fa-home mr-1" aria-hidden="true"></i>Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/complaint" className="nav-link text-white mr-3" href="#"><i className="fa fa-user mr-1" aria-hidden="true"></i>Complaint<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/contactus" className="nav-link text-white mr-3" href="#"><i className="fa fa-phone mr-1" aria-hidden="true"></i>Contact Us<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/postpgdetail1" className="nav-link text-danger mr-3" href="#"><i className="fa fa-building mr-1" aria-hidden="true"></i><strong>List Your PG Now</strong><span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/login" className="nav-link text-white mr-3" href="#"><i className="fa fa-user mr-1" aria-hidden="true"></i>Login <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link text-white mr-3" href="#"><i className="fa fa-user-plus mr-1" aria-hidden="true"></i>Register</Link>
      </li>
    </ul>
  </div>
</nav>
                    </header> 
            </>
        )
    }
}
export default Topbar;