import React, { Component , Fragment } from 'react';


class Terms extends Component {
  

  render() {
    
    return (        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="checkbox_cgu" />
            <label className="form-check-label" for="checkbox_cgu">J’ai lu et j’accepte les <a href="" data-toggle="modal" data-target="#CguModal">conditions d’utilisation</a></label>
        </div>
        );
        }
    }

export default Terms;