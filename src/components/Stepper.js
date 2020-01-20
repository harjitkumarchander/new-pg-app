import React, { Component } from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

class Stepper extends Component {

state = {
  formActivePanel1: 1,
  formActivePanel1Changed: false,
}

swapFormActive = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleNextPrevClick = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleSubmission = () => {
  alert('Form submitted!');
}

calculateAutofocus = (a) => {
  if (this.state['formActivePanel' + a + 'Changed']) {
    return true
  }
}

render() {
  return (
    <MDBContainer>
      <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Registration form</strong></h2>
      <form>
        <MDBRow>
          {this.state.formActivePanel1 === 1 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Basic Information</strong></h3>
              <div className="form-group">
					<label>Select Properties<span>*</span></label>
					    <select className="form-control" name="pg_category" onChange={this.handleChange} autoFocus={this.calculateAutofocus(1)} required="">
					        <option>Select PG Category</option>
					        <option>Only 1</option>
					        <option>2 to 4</option>
					        <option>5 to more</option>
					    </select>
                    </div>
            <MDBInput label="Email" className="mt-4" />
            <MDBInput label="Username" className="mt-4" />
            <MDBInput label="Password" className="mt-4" />
            <MDBInput label="Repeat Password" className="mt-4" />
            <MDBBtn color="mdb-color" rounded className="float-right bg-primary" onClick={this.handleNextPrevClick(1)(2)}>next</MDBBtn>
          </MDBCol>)}

          {this.state.formActivePanel1 === 2 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Personal Data</strong></h3>
            <MDBInput label="First Name" className="mt-3" autoFocus={this.calculateAutofocus(1)} />
            <MDBInput label="Second Name" className="mt-3" />
            <MDBInput label="Surname" className="mt-3" />
            <MDBInput label="Address" type="textarea" rows="2" />
            <MDBBtn color="mdb-color" rounded className="float-left bg-primary" onClick={this.handleNextPrevClick(1)(1)}>previous</MDBBtn>
            <MDBBtn color="mdb-color" rounded className="float-right bg-primary" onClick={this.handleNextPrevClick(1)(3)}>next</MDBBtn>
          </MDBCol>)}

          {this.state.formActivePanel1 === 3 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 mt-5 my-4"><strong>Terms and conditions</strong></h3>
            {/* <label>I agreee to the terms and conditions</label>
            <input type="checkbox" className="float-left" /><br /> <br />
            <label className="ml-0">I want to receive newsletter</label>
            <input type="checkbox" className="float-left" /> */}
            <div class="form-group row"> 
              <div class="col-lg-1">
                <input class="form-control" type="checkbox" autoFocus={this.calculateAutofocus(1)} />
              </div>
              <label class="col-lg-11 col-form-label form-control-label">I agreee to the terms and conditions</label>
            </div>
            <div class="form-group row"> 
              <div class="col-lg-1">
                <input class="form-control" type="checkbox" />
              </div>
              <label class="col-lg-11 col-form-label form-control-label">I want to receive newsletter</label>
            </div>
            {/* <MDBInput style={{marginLeft : "-600px"}} type="checkbox" autoFocus={this.calculateAutofocus(1)} />
            <label>I agreee to the terms and conditions</label><br />
            <MDBInput style={{marginLeft : "-600px"}} type="checkbox" id="checkbox2" className="mt-5" /><br />
            <label className="ml-0">I want to receive newsletter</label><br /><br /> */}
            
            <MDBBtn color="mdb-color" rounded className="float-left mt-5 bg-primary" onClick={this.handleNextPrevClick(1)(2)}>previous</MDBBtn>
            <MDBBtn color="mdb-color" rounded className="float-right mt-5 bg-primary" onClick={this.handleNextPrevClick(1)(4)}>next</MDBBtn>
          </MDBCol>)}

          {this.state.formActivePanel1 === 4 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
            <h2 className="text-center font-weight-bold my-4">Registration completed!</h2>
            <MDBBtn color="mdb-color" rounded className="float-left bg-primary" onClick={this.handleNextPrevClick(1)(3)}>previous</MDBBtn>
            <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}>submit</MDBBtn>
          </MDBCol>)}
        </MDBRow>
      </form>
    </MDBContainer>
    );
  };
}

export default Stepper;
