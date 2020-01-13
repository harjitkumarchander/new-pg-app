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
        fetch('https://randomuser.me/api/?results=50')
        .then(res =>res.json())
        .then(res => {
            console.log(res);
            this.setState({
                user : res.results,
                user2 : res.results
            })
        })
    }

    searchPhoto = (e) => {
        console.log(e.target.value);
        let user2 = [];
        for(const obj of this.state.user){
            let gender = obj.gender;
            let title = obj.name.title;
            if(e.target.value.toLowerCase() === gender.substring(0, e.target.value.length).toLowerCase()||
              (e.target.value.toLowerCase() === title.substring(0, e.target.value.length).toLowerCase())
            )
            {
                user2.push(obj);
            }
            console.log(obj);
        }this.setState({
            user2
        })
    }
    render() {
        return (
            <div>
                <label>Search photo by Gender or Title</label>
                <input type="text" onChange={this.searchPhoto} />
                {
                    this.state.user2.map((v,i)=>{
                        return(
                            <ul key={i}>
                    <li style={{float : "left", listStyle : "none"}}><img src={v.picture.large} alt="oolala" /></li>
                            </ul>
                        );
                    })
                }
            </div>
        )
    }
}

export default PhotoSearch;
