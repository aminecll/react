import React, { Component } from 'react';
import MenuElement from "./MenuElement"
import Row from './Row';
import events from './sample'


import TitreAcceuil from './TitreAcceuil'
import Pagination from './Pagination';
class Container extends Component {
    state = {
        events : {},
    };
    loadevents = () => {
        this.setState({events : events});
    }
    componentDidMount() {
        this.loadevents();
      }
    compnentWillUpdate(){
        this.loadevents();   
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

export default Container;