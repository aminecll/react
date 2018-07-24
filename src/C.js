import React, { Component, Fragment } from 'react';
import Container from './Container';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductWrapper from './ProductWrapper';
import Participe from './Participe';
import store from './store';
import Nav from './Nav';
import Footer from './Footer';
import Tri from './Tri';
import Login from './Login'
import Register from './Register'








class C extends Component {

    
    render() {
        return (
            
            <Provider store={store}>
                <Fragment>
                    <body>
                    <Router>
                        <div>
                        <Nav />
                        <main>
                        <Route exact path="/" component={Tri } />
                            <div className="container">
                                
                                    <div>
                                        <Route exact path="/" component={Container } />
                                        <Route exact path="/event/:eventId" component={ProductWrapper} />
                                        <Route exact path='/participe/:eventId' component ={Participe} />
                                        <Route exact path='/Connexion' component={Login} />
                                        <Route exact path='/Inscription' component={Register} />
                                    </div>
                                
                            </div>
                        </main>
                        </div>
                        </Router>
                    </body>
                    <Footer />
                </Fragment>
            </Provider>
            
        );
    }
}


export default C