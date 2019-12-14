import React, { Component } from 'react';


export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel ">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" >
                <div className="carousel-item active"style={{backgroundColor:'#000'}} >
                  <img src="https://www.studioetbureaudejardin.com/img/davinci-loft-3a.jpg" className="d-block w-100" alt="..."style={{height:'38rem',opacity:"0.5"}}/>
                  <div className="carousel-caption  d-md-block mb-5" >
                    <h1 style={{color:'#ffa400',opacity:'0.7'}}>Construction</h1>
                    <h2>Anis Construction, C’est Notre Métier de Construire</h2>
                  </div>
                </div>
                <div className="carousel-item" style={{backgroundColor:'#000'}}>
                <img src="https://kckdata.io/i/c53/e1e/966/studio-de-jardin-1-2_800x430.jpg" className="d-block w-100" alt="..."style={{height:'38rem',opacity:"0.5"}}/>
                  <div className="carousel-caption  d-md-block mb-5">
                    <h1 style={{color:'#ffa400',opacity:'0.7'}}>Réonavation</h1>
                    <h2>Anis Construction est votre entreprise spécialisée dans la rénovation des bâtiments</h2>
                  </div>
                </div>
                <div className="carousel-item"style={{backgroundColor:'#000'}}>
                <img src="https://studiokub.com/wp-content/uploads/2018/03/studio-kub-206.jpg" className="d-block w-100" alt="..."style={{height:'38rem',opacity:"0.5"}}/>
                  <div className="carousel-caption d-md-block mb-5">
                    <h1 style={{color:'#ffa400',opacity:'0.7'}}>Décoration</h1>
                    <h2>Finitions intérieur et extérieur de votre maison</h2>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
        )
    }
}

