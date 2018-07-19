import React, { Component } from 'react';


import Dropdown from 'react-dropdown'
import 'react-dropdown/ss.css'


  class Select extends Component {

      render(){
        const options = [
            'Simple utilisateur', 'Organisateur'
           ]
         var t=[];
         var i=0
         if ( this.props.tab !=null && this.props.tab !== options){
             while (this.props.tab[i] != null){
                 t.push(this.props.tab[i]);
                 i++;
             }
         
         } 
         else{
             t=options;
         }
           const defaultOption = t[0]
          return(
              <div className="mdb-select select-dropdown">
            <Dropdown  options={t} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /></div>
          )
      }
    }
    export default Select;
