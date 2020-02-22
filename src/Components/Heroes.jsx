import React, { Component } from "react";

import Hero from './Hero';

class Heroes extends Component{
    state = {
        allHeroes: [
            { id: 1, likeCount:2 },
            { id: 2, likeCount:4 },
            { id: 3, likeCount:9 },
        ]         
    };

    render (){
        return (
        <div className= "container">
            <div className= "row">
                    {this.state.allHeroes.map(h => (
                    <div key={h.id} className= "col">
                        <Hero />
                </div>))}
            </div>
        </div>
        );
    };
}

export default Heroes;