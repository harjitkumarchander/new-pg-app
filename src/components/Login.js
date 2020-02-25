import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import Topbar from './Topbar';
import Footer from './Footer';

class Login extends Component {
  constructor(){
    super();
      this.state = {
        email : '',
        password : '',
        login : false,
        user : [],
      }
    }
    handleInput = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    loginApp(){
      fetch('http://staging.nugen.co.in/api/v1/login',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(this.state)
      })
      .then((resp)=>{
        console.log("result", resp);
        if(resp.access_token){
        localStorage.setItem('UserData', resp)
        this.setState({
          login : true
        })
      }
        else{
          console.log("error while login")
        }
      })
    }
     
    render() {
      if(this.state.login){
        return <Redirect to="/mainpage" />
      }
        return (
          <>
          <Topbar />
            <div style={{width : "450px"}} className="container card-outline-secondary mt-5 mb-5">
              <div className="card">

                <h5 className="card-header info-color white-text bg-primary text-center py-4">
                  <strong>Sign in</strong>
                </h5>
                <div className="card-body px-lg-5 pt-0">
                  <form className="text-center" style={{color: "#757575"}} action="#!">
                    <div className="md-form pt-4">
                      <input type="email" id="materialLoginFormEmail" className="form-control" name="email" value={this.state.email} onChange={this.handleInput} />
                      <label>E-mail</label>
                    </div>
                    <div className="md-form">
                      <input type="password" id="materialLoginFormPassword" className="form-control" name="password" value={this.state.password} onChange={this.handleInput} />
                      <label>Password</label>
                    </div>

                    <div className="d-flex justify-content-around">
                      <div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
                          <label className="form-check-label">Remember me</label>
                        </div>
                      </div>
                      <div>
                        <Link to="/" href="">Forgot password?</Link>
                      </div>
                    </div>
                    <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onClick={()=>{this.loginApp()}} >Sign in</button>
                    <p>Not a member?
                      <Link to="/" href="">Register</Link>
                    </p>
                    <p>or sign in with:</p>
                    <Link to="/" type="button" className="btn-floating btn-fb btn-sm">
                      <i style={{color: "#0275d8"}} className="fa fa-facebook-f"></i>
                    </Link>
                    <Link to="/" type="button" className="btn-floating btn-tw btn-sm">
                      <i style={{color: "#0275d8"}} className="fa fa-twitter"></i>
                    </Link>
                    <Link to="/" type="button" className="btn-floating btn-li btn-sm">
                      <i style={{color: "#0275d8"}} className="fa fa-linkedin"></i>
                    </Link>
                    <Link to="/" type="button" className="btn-floating btn-git btn-sm">
                      <i style={{color: "#0275d8"}} className="fa fa-github"></i>
                    </Link>

                  </form>
                </div>

              </div>     
          </div>
            <Footer />
            </>
        )
    }
}
export default Login;