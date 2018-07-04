import React, { Component , Fragment } from 'react';
var bgColors = { "Default": "#81b71a"}

class Slides extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-7 wow fadeIn" data-wow-delay="0.2s">
            <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
               

                <ol className="carousel-indicators">
                    
                            <li data-target="#carousel-example-1z" data-slide-to="0"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                        
                </ol>

               
               
                <div className="carousel-inner" role="listbox">
                    
                    <div className="carousel-item active">
                        
                            <img className="d-block w-100" src={"/images/s.jpg"} alt="" styles={"width:635px,height:425px"} />
                       
                    </div>
                    
                            <div className="carousel-item ">
                                <img className="d-block w-100" src={"/images/az.jpeg"} alt="" styles={"width:635px,height:425px"} />
                            </div>
                           
                            <div className="carousel-item ">
                                <img className="d-block w-100" src={"/images/az.jpeg"} alt="" styles={"width:635px,height:425px"} />
                            </div>
                           
                   

                </div>
           
       
                <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
               
            </div>
            </div>
            <div className="col-lg-5">
        
               
            <div className="row wow fadeIn" data-wow-delay="0.4s">
                  <div className="col-md-12">
                
            </div>
                <div className="col-md-12">
              
                    
                    <div className="product-wrapper">
                        titre
                        
                        <h2 className="h2-responsive mt-4 font-bold">titre</h2>

                        <hr />

                        <h2>
                            <span className="badge" style={{backgroundColor: bgColors.Default}}>10 €</span>
                        </h2>
                     
                        <dl className="row mt-4">
                            <dt className="col-sm-4">Date de début</dt>
                            <dd className="col-sm-8">date debut</dd>

                            <dt className="col-sm-4">Date de fin</dt>
                            <dd className="col-sm-8">Date fin</dd>
                            <dt className="col-sm-4">Heures</dt>
                            <dd className="col-sm-8">De <strong>15 </strong> à <strong>19 </strong> </dd>

                            <dt className="col-sm-4 text-truncate">Lieu</dt>
                            <dd className="col-sm-8">adresse</dd>
                            <dt className="col-sm-5 text-truncate">Places disponibles</dt>
                            <dd className="col-sm-7">5</dd>
                        </dl>

                        <br />
                        {/*{% if event.nbrParticipants == event.nbrMax %}
                            <a  className="btn btn-primary-atelier btn-md pull-right" >Complet</a>
                        {%elseif is_granted("IS_AUTHENTICATED_REMEMBERED") %}
                            <a  href="{{ path('order_new',{ 'amount': event.prix, 'event': event.id }) }}" className="btn btn-primary-atelier btn-md pull-right" >Participez</a>
                        {%else%}
                            <a  href="{{ path('fos_user_security_login') }}"  className="btn btn-primary-atelier btn-md pull-right" >Participez</a>
                        {%endif%}
                    </div>
    {{ app.session.set('referer', app.request.uri ) }}*/}

                    

                </div>
            </div>
           

        </div>
        </div>
        </Fragment>
     

        
    );
}
}

export default Slides;