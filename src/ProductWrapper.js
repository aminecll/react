import React, { Component, Fragment } from 'react';
import Product from './Product'
import Slides from './Slides'
import Pic from './pic'
import Map from './Map'
import ProductDescription from './ProductDescription'
import { connect } from 'react-redux'
class ProductWrapper extends Component {
    

    render() {
        
        return (
            <Fragment>

                <div className="row mt-lg-5">


                    <Slides history={this.props.history} detail={this.props.e} />

                    <ProductDescription desc={this.props.e.desc} />
                    <div className="col-lg-12">
                        <br /><br />
                        <h2>Galerie de photos </h2>
                        <div id="mdb-lightbox-ui" className="list-unstyled row">

                            <Pic images={this.props.e.images}/>

                           
                        </div>
                    </div>

                </div>
                <br />
                <hr />

                <Map lat={this.props.e.lat} lng={this.props.e.lng} />

            </Fragment>



        );
    }
}

const mapStateToProps = state => ({
    e: state.e.e
});
export default connect(mapStateToProps)(ProductWrapper);