import React, { Component } from 'react';
class Searchlistfromapi extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            text : '',
            suggestions : []
        }
    }

    handleChange = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter( v => regex.test(v));

        }
        this.setState(()=>({
            suggestions, 
            text: value
        }))
        console.log(items)
    }

    suggestionSelected(value){
        this.setState(()=>({
            text : value,
            suggestions : []
        }))
    }

    renderSussetions(){
        const {suggestions} = this.state;
        if(suggestions.length === 0){
            return null
        }

        return (
            <ul>
                {suggestions.map((item)=> <li onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    // handleClick = () => {
    //     fetch('http://whispering-refuge-34674.herokuapp.com/api/pg')
    //     .then(res=>res.json())
    //     .then(res => {
    //         let tempArr = []
    //         for(const obj of res){
    //             if(obj.state !== undefined){
    //                 tempArr.push(obj)
    //             }
    //         }
    //         this.setState({
    //             users : tempArr
    //         })
    //         console.log(res);
    //     })
    //     .catch(error=>{
    //         console.log('error while fethching', error);
    //     })
    // }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                {this.renderSussetions()}
                <button onClick={this.handleClick}>Submit</button>
                {
                    this.state.users.map((v,i)=>{
                        let imageUrl = `http://whispering-refuge-34674.herokuapp.com/images/${v.image}`;
                        return(
                            <div key={i} class="card col-md-4 col-12 container-fluid d-flex" style={{width: "25rem"}}>
                                <img class="card-img-top" src={imageUrl} alt="Cardimage" />
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
