import React, { Component } from 'react';
import Product from './Product'
import Slides from'./Slides'
import Pic from './pic'
import Map from './Map'
import ProductDescription from './ProductDescription'
class ProductWrapper extends Component {
    render() {
        return (
            <div>
             
            <div className="row mt-lg-5">
           
            
               <Slides />
               
               <ProductDescription />
                <div class="col-lg-12">
            <br/><br/>
            <h2>Galerie de photos </h2>
            <div id="mdb-lightbox-ui" className="list-unstyled row">
                
            <Pic />
            
            {/*<ul id="mdb-lightbox-ui" className="list-unstyled row">
                
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive={"/images/s.jpg"} data-src={"/images/s.jpg"} data-sub-html="<h4>titre</h4>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                        <a href="">
                            <img className="img-responsive" src={"/images/s.jpg"} styles={"width:282px,height:188px"} alt="Thumb-1" />
                        </a>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive={"/images/az.jpeg"} data-src={"/images/az.jepg"} data-sub-html="<h4>titre</h4>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                        <a href="">
                            <img className="img-responsive" src={"/images/az.jpeg"} styles={"width:282px,height:188px"} alt="Thumb-1" />
                        </a>
                    </li>
                
            </ul>*/}
        </div>
            </div>
  
             </div>
             <Map />
     
     </div>
            
            

        );
    }
}

export default ProductWrapper;