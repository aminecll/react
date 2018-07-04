import React, { Component } from 'react';


import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    'one', 'two', 'three'
  ]
  const defaultOption = options[0]
  class Select extends Component {
      render(){
          return(
              <div className="mdb-select select-dropdown">
            <Dropdown  options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /></div>
          )
      }
    }
    export default Select;
