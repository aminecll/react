import React, { Component , Fragment } from 'react';

import './App.css';

import FooterMenuElement from './FooterMenuElement';
import ProgressBar from './ProgressBar';

class MenuElement extends Component {

 

  
  render() {
    return (
      
      <Fragment>
      <div className="col-lg-4 wow fadeIn">
      <div className="card" >

          

          <div className="view overlay hm-white-slight z-depth-1">

              
                  <img src={this.props.event.images[0]} className="img-fluid" /> 
              

              <a href="ProductWrapper">
                  <div className="mask waves-effect waves-light"></div>
              </a>
          </div>

          

         
          <div className="card-body text-center">
              
                <h5>{this.props.event.category}</h5>
                <h4 className="card-title"><strong><a href={"#"} className="">{this.props.event.titre}</a></strong></h4>

              
              <p className="card-text">{this.props.event.desc}
            
              </p>

                <ProgressBar id={this.props.event.id} nbrmax={this.props.event.nbrMax} nbrParticipants={this.props.event.nbrParticipants} ></ProgressBar>

              
                <div  align="center" className="percent_val" ><p><font size="2" id="percent_1" ></font></p></div>

                <div  align="center" className="nbr_eventClient" ><p><font size="2" id="eventClient_1" > ({this.props.event.nbrParticipants}/{this.props.event.nbrMax}) Participants</font></p></div>


          </div>
         

         
          <FooterMenuElement date={this.props.event.dateDeb} prix={this.props.event.prix}></FooterMenuElement>
          
      </div>
      </div>
      

  </Fragment>
    );
  }
}

export default MenuElement;
