import React, { Component } from 'react';
import login from './login-avatar.jpg';

class Login extends Component {
    render() {
        return(
            <div className="row text-left">
           
            <div className="col-md-3 mb-r">
    
    
            </div>
           
    
           
            <div className="col-md-6 mb-r pb-5">
    
                <div className="card">
                    <div className="card-body z-depth-3">
                        
                            {/*<div className="error-msg alert alert-danger" role="alert">{{ error.messageKey|trans(error.messageData, 'security') }}    </div> */}
                        
    
    
                        <br></br>
                        <div className="avatar text-center"><img src={login} className="img-circle img-responsive"  height="100" width="100"></img>
                        </div>
                        <br></br>
                        
                        <h3 className="text-center">Connexion</h3>
                        <br></br>
                        
                        <form action="" method="post" >
    
                            <input type="hidden" name="_csrf_token" value="{{ csrf_token }}" />
                            <input type="hidden" name="_target_path" value="{{ app.session.get('referer') }}" />
    
                            <div className="md-form">
                                <i className="fa fa-user-circle prefix grey-text"></i>
                                <input type="text" id="username" name="_username" value="" required="required" />
                                <label for="username">Nom d'utilisateur</label>
                            </div>
    
                            <div className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <input type="password" id="password" name="_password" required="required" />
                                <label for="password">Mot de passe</label>
                            </div>
    
    
                            <div className="text-center">
                                <input type="submit" id="_submit" name="_submit" value="Connexion" className="btn btn-primary-inverse btn-md waves-effect waves-light" />
    
                                <br></br>
                                <input type="checkbox" id="remember_me" name="_remember_me" value="on" />
                                <label for="remember_me">Se souvenir de moi</label>
    
                            </div>
                        </form>
                        <br></br>
                        <div className="text-center">
                            <h4>Ou</h4>
    
                            <h5>Se connecter avec:</h5>
                            <span>
                               
                                <a href="{{ path('hwi_oauth_service_redirect', {'service': 'facebook' }) }}" type="button" className="btn-floating btn-fb waves-effect waves-light">
                                    <i className="fa fa-facebook"></i>
                                </a>
                               
                                <a href="{{ path('hwi_oauth_service_redirect', {'service': 'google' }) }}" type="button" className="btn-floating btn-gplus waves-effect waves-light">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                               
                                <a href="{{ path('hwi_oauth_service_redirect', {'service': 'twitter' }) }}" type="button" className="btn-floating btn-tw waves-effect waves-light">
                                    <i className="fa fa-twitter"></i>
                                </a>
                     
    
                            </span>
                        </div>
                        <div className="options text-right">
                            <hr></hr>
                            <p>Vous n'avez pas de compte ? <a href="{{path ('fos_user_registration_register')}}">Inscription</a></p>
                            <p><a href="">Mot de passe oublié?</a></p>
                        </div>
    
                    </div>
    
    
                </div>
    
            </div>
           
    
           
            <div className="col-md-3 mb-r">
    
    
            </div>
           
    
        </div>
    

    );
}
}

export default Login;