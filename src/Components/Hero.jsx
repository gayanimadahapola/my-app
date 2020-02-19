import React, { Component } from "react";

class Hero extends Component{

    state = {
        heroId: 101,
        heroName: "Hero 1"
    };
    render() {
        return(
            <React.Fragment>
              <h1>Heros Components.. {this.isHero()}</h1>
              {/* <h3>Hero ID is {this.state.heroId}</h3> */}
              <button className="alert alert-primary"> Click me</button>
              <div className="card" style={{width: '50rem'}}>
              <img 
               className="card-img-top" 
               src="https://images.alphacoders.com/691/thumb-350-691064.jpg" 
               alt="cartoon"
              />
              <div className="card-body">
              <h5 className="card-title">Super Girl</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <ul>
                  <li>Flying</li>
                  <li>Super power 2</li>
                  <li>Super power 3</li>
              </ul>
              <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
        </div>
            </React.Fragment>
        );
    };
    //create method
    isHero(){
        if(this.state.heroId < 1000) {
        return "Super Girl";
    } else {
        return "Not an Avenger";
    }
//below is simple code for above
    return  (this.state.heroId < 1000) ? "Avenger" : "Not an Avenger";
 }
}

export default Hero;