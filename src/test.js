import React, { Component } from 'react';
import MenuElement from "./MenuElement"
import Row from './Row';
import events from './sample'


import TitreAcceuil from './TitreAcceuil'
import Pagination from './Pagination';
class Test extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          events: {},
        };
      }
    
      componentDidMount() {
        fetch('http://dsc-power.com/Atelier/web/events_json')
          .then(response => response.json())
          .then(events => this.setState({ events :events }));
          
    }

    render() {
        return (
            <div className="container">

            <TitreAcceuil></TitreAcceuil>
                    <Row details={this.state.events}></Row>
                    
                    <hr></hr>
                <Pagination></Pagination>

        </div>
        );
    }
}

export default Test;