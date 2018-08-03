import React, { Component, Fragment } from 'react';
import {connect } from 'react-redux'
import Container from './Container';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductWrapper from './ProductWrapper';
import Participe from './Participe';
import NewEvent from './NewEvent'
import Profil from './Profil'
import ListEvent from './ListEvent'

import Nav from './Nav';
import Footer from './Footer';
import Tri from './Tri';
import Login from './Login'
import Register from './Register'
import { history , store } from './helpers';
import { alertActions } from './actions';







class C extends Component {
    // constructor(props) {
    //     super(props);
 
    //     const { dispatch } = this.props;
    //     history.listen((location, action) => {
    //         // clear alert on location change
    //         dispatch(alertActions.clear());
    //     });
    // }

    
    render() {
        // const { alert } = this.props;
        return (
            
            
                <Fragment>
                    <body>
                    <Router history={history}>
                        <div>
                        <Nav />
                        <main>
                        <Route exact path="/" component={Tri } />
                            <div className="container">
                            {/* {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        } */}
                                    <div>
                                        <Route exact path="Atelier_react/" component={Container } />
                                        <Route exact path="Atelier_react/event/:eventId" component={ProductWrapper} />
                                        <Route exact path='Atelier_react/participe/:eventId' component ={Participe} />
                                        <Route exact path='Atelier_react/Connexion' component={Login} />
                                        <Route exact path='Atelier_react/Inscription' component={Register} />
                                        <Route exact path='Atelier_react/new' component={NewEvent} />
                                        <Route exact path='Atelier_react/list' component={ListEvent} />
                                        {localStorage.getItem('user') ? 
                                        <Route exact path='Atelier_react/Profil' component={Profil} /> : null }
                                    </div>
                                
                            </div>
                        </main>
                        </div>
                        </Router>
                    </body>
                    <Footer />
                </Fragment>
            
            
        );
    }
}
function mapStateToProps(state) {
    const { alert } = state;
    
    return {
        user : state.authentication.user,
        alert
    };
}

export default connect(mapStateToProps)(C);