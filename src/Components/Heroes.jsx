import React, { Component } from "react";

import Hero from './Hero';
import axios from "axios";

class Heroes extends Component{
    state = {
        allHeroes: []
        
    };

    render (){
        return (
        <div className= "container">
            <div className= "row">
                    {this.state.allHeroes.map(h => (
                    <div key={h.id} className= "col">
                        <Hero 
                        />
                </div>))}
            </div>
        </div>
        );
    };

//React lifecycle
async componentDidMount(){

   const { data } = await axios.get("http://localhost:5500/api/heroes");
   console.log(data); 
   let heroes = data.map(hero => {

    return{
        id: hero._id,
        name: hero.name,
        imgUrl: hero.imgUrl,
        likeCount: hero.likeCount,
        movies: hero.movies
    };
   });
   this.setState({ allHeroes: heroes });
}}

export default Heroes;