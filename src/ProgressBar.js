import React, { Component } from 'react';
class ProgressBar extends Component {
    render() {
        return (
                <div className=" progress "  styles={{marginBottom: '0px'}}  >
                         <div id="1" className="progress-bar bg-success progress-bar-striped" role="progressbar" styles={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                         </div>
                                <span id="percent">50%</span>
                </div>
           
        );
    }
}

export default ProgressBar;