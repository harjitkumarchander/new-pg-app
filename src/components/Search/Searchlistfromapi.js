import React, { Component } from 'react';

class Searchlistfromapi extends Component {
    constructor(){
        super();
        this.state = {
            users : []
        }
    }

    handleClick = () => {
        fetch('http://whispering-refuge-34674.herokuapp.com/api/pg')
        .then(res=>res.json())
        .then(res => {
            this.setState({
                users : res
            })
            console.log(res);
        })
        .catch(error=>{
            console.log('error while fethching', error);
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Submit</button>
                {
                    this.state.users.map((v,i)=>{
                        return(
                            <div key={i} class="card col-md-4 col-12 container-fluid d-flex" style={{width: "25rem"}}>
                                <img class="card-img-top" src={v.image} alt="Cardimage" />
                                <div class="card-body">
                                    <h5 class="card-title">{v.name}</h5>
                                    <p class="card-text">Name :-{v.name}</p>
                                    <p class="card-text">Address :- {v.address}{ " " }{v.city}{ " " }{v.state}</p>
                                    <p class="card-text">Email :- {v.email}</p>
                                    <p class="card-text">Phone :- {v.phone}</p>
                                    <p class="card-text">Price :- {v.price}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default Searchlistfromapi;
