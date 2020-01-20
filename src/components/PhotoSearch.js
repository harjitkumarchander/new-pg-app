import React, { Component } from 'react';

export class PhotoSearch extends Component {
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
            console.log(result.msg);
            this.setState({
                user : result.results,
                user2 : result.results
            })
        })
    }

    handleInput = (e) => {
        console.log(e)
        let user2 = [];
        for(const obj of this.state.user){
            let gender = obj.gender;
            if(e.target.value === gender.substring(0, e.target.value.length)){
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
                <label>Search Photo by gender from API</label>
                <input type="text" onChange={this.handleInput} />
                {
                    this.state.user2.map((v,i)=>{
                        return(
                            <ul key={i}>
                    <li>{v.name.title}<img src={v.picture.large} alt="oolala" /></li>
                            </ul>
                        );
                    })
                }
            </div>
        )
    }
}

export default PhotoSearch
