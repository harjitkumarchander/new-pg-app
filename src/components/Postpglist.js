import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Postpglist extends Component {
    constructor(){
        super();
        this.state = {
            pglist : []
        }
    }

    componentDidMount(){
        fetch('http://whispering-refuge-34674.herokuapp.com/api/pg')
        .then((res)=>res.json())
        .then((res) => {
            this.setState({
                pglist : res
            })
            console.log(res);
        })
        .catch(error => {
            console.log('error while fetching' , error);
        })
    }
    render() {
        return (
            <div>
                
                <Table striped bordered hover>
                <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Address</th>
      <th>State</th>
      <th>City</th>
      <th>Phone</th>
      <th>Price</th>
      <th>Email</th>
      <th>Images</th>
    </tr>
  </thead>
  </Table>
                {
                    this.state.pglist.map((v,i)=>{
                        return(
                            
                            <Table striped bordered hover>
  <tbody>
    <tr>
                        {/* <td>{v.}</td> */}
                        <td>{v.name}</td>
                        <td>{v.address}</td>
                        <td>{v.state}</td>
                        <td>{v.city}</td>
                        <td>{v.phone}</td>
                        <td>{v.price}</td>
                        <td>{v.email}</td>
                        <td><img src={v.image} alt="imggg" /></td>
    </tr>
  </tbody>
  </Table>

                        )
                    })
                }
            </div>
        )
    }
}

export default Postpglist;
