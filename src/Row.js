import React, { Component , Fragment } from 'react';
import MenuElement from './MenuElement'
import events from './sample.js'

class Row extends Component {

    render() {
        return(
            
            
            <Fragment>
                
                <div className="row mt-5 wow">
                {/*{Object.keys(this.props.details).map(key => <Cd key={key} event={this.props.details[key]}></Cd>)}*/}
              { Object.keys(this.props.details).map(key => <MenuElement key={key} detail={this.props.details[key]}></MenuElement>)}
                
               
                </div>
               
            </Fragment>

    );
}
}

export default Row;