import React, { Component } from "react";

class Hero extends Component{

    state = {
        heroId: 9001,
        heroName: "Hero 1",
        movies:["movie 1","movie 2"],
        likeCount: 0    
    };
    render() {
        return(
            <React.Fragment>
              <h1>Heros Components.. {this.isHero()}</h1>
              {/* <h3>Hero ID is {this.state.heroId}</h3> */}
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                 <li class="breadcrumb-item active" aria-current="page">Home</li>
               </ol>
              </nav>
              {/* <button className="alert alert-primary"> Click me</button> */}
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              {/* button group */}
              <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
              </div>
              <div className="card" style={{width: '20rem'}}>
              <img 
               className="card-img-top" 
               src="https://images.alphacoders.com/691/thumb-350-691064.jpg" 
               alt="cartoon"
              />
              <span class="badge badge-warning">Warning</span>
              <span class="badge badge-danger">Danger</span>
              
              <div className="card-body">
              <h5 className="card-title" className="alert alert-danger" >Super Girl</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>movies</p>
              <ul>
                  {this.showMovies()}
              </ul>
              <ul>
                  <li>Flying</li>
                  <li>Super power 2</li>
                  <li>Super power 3</li>
              </ul>        
              <div class="card text-white bg-danger mb-3" style={{width: '18rem;'}}>
              <div class="card-header">Header</div>
              <div class="card-body">
              <h5 class="card-title">Danger card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
              <div class="card text-white bg-warning mb-3" style={{width: '18rem;'}}>
              <div class="card-header">Header</div>
            <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>         
          </div>

          <div className="row justify-content-center" >
              {/*<a href="#"  className="btn btn-primary"  > Go somewhere</a>
              //convert hyper link to a button */}
              <button className="btn btn-primary" onClick= {() => this.likeAvenger(1)}
              >
                  Like {" "}
              <span class="badge badge-light" >{this.state.likeCount}</span>
              </button>
              </div>        
           </div>          
        </div>

        {/* Form */}
        
            </React.Fragment>
        );
    };

    showMovies(){
        if(this.state.movies.length === 0) return <p>No Movies available</p>;
    return this.state.movies.map(movie => <li key={this.state.movies.indexOf(movie)} >{movie}</li>);
    }

    likeAvenger = () => {
        console.log("You have like the super hero");
        this.state.likeCount++;
    };

    likeAvenger = () => {
        this.setState({likeCount : this.state.likeCount +1});
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