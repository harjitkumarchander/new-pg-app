import React, { Component } from 'react';

class PhotoSearch extends Component {
    constructor(){
        super();
        this.state = {
            user : [],
            user2 : []
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(result => {
            console.log(result);
            this.setState({
                user : result.results,
                user2 : result.results
            })
        })
    }

    handleInput = (e) => {
        let user2 = [];
        for(const obj of this.state.user){
            let gender = obj.gender;
            if(e.target.value === gender.substring(0, e.target.value.length))
            {
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
            <div>
                <label>Search Photo by Gender</label>
                <input type="text" onChange={this.handleInput} />
                {
                    this.state.user2.map((v,i)=>{
                        return(
                            <ul key={i}>
                    <li style={{float : "left"}}>{v.name.title}<img src={v.picture.large} alt="oolala" /></li>
                            </ul>
                        );
                    })
                }
            </div>
        )
    }
}

export default PhotoSearch
