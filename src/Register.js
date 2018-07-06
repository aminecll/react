import React, { Component } from 'react';
import Select from './select.js'
import Terms from './Terms'


class Register extends Component {
    render() {
        return(
            <div className="row text-left">
   
    <div className="col-md-3 mb-r">


    </div>
   

   
    <div className="col-md-6 mb-r pb-5">



        <div className="card">
            <div className="card-body z-depth-3">

                <br></br>
                <div className="avatar text-center"><img src={"/images/avatar.jpg"} className="img-circle img-responsive"  height="100" width="100" />
                </div>
                <br></br>
               

                <h3 className="text-center">Register</h3>
                <br></br>
                <form>

                <div className="md-form">
                    <i className="fa fa-user-circle prefix grey-text"></i>
                    <label  for="username" >Prénom</label>
                    <input type="text" name="username" className="username" required></input>
                    
                </div>
                <div className="md-form">
                    <i className="fa fa-user-circle prefix grey-text"></i>
                    <label  for="username" >Nom</label>
                    <input type="text" name="last_name" className="last_name" required></input>
                  
                </div>

                <div className="md-form">
                    <i className="fa fa-envelope prefix grey-text"></i>
                    <label for="email">E-mail</label>
                    <input type="text" name="email" className="email" required></input>
                    
                </div>


                <div className="md-form">
                    <i className="fa fa-user-circle prefix grey-text"></i>
                    <label  for="username" >Username</label>
                    <input type="text" name="email" className="email" required></input>

                </div>

                <div className="md-form">
                    <i className="fa fa-lock prefix grey-text"></i>
                    <label for="password">Mot de passe</label>
                    <input type="text" name="plainPassword"  required></input>

                </div>

                <div className="md-form">
                    <i className="fa fa-lock prefix grey-text"></i>
                    <label for="verification">Répéter le mot de passe</label>
                    <input type="password" name="plainPassword"  required></input>
            
                    <br/><br/>
                    
                    <div className="md-form ">
                        <i className="fa fa-calendar prefix grey-text" ></i>
                       <label for="date_naissance">Date de naissance</label>
                       <input type="date" name="plainPassword"  required></input> 
                       <br/><br/>
                       </div>                    
                   <div className="md-form"> 
                        <i className="fa fa-photo prefix grey-text"></i>
                        <label for="photo">Photo de profil</label>
                        <br></br><br></br>
                        <input type="file" name="photo"  required></input>
                    </div>

                </div>
                <div className="md-form">
                    <i className="fa fa-key prefix grey-text"></i>
                    <label for="roles">Choisissez votre type</label>
                    
                    <br></br>
                </div>
                <div className="md-form">
                <Select />
                </div>
    

                <Terms />
                
                <div className="text-center">
                    <input type="submit" id="_submit" name="_submit" value="Inscription" className="btn btn-primary-inverse btn-md waves-effect waves-light" />
                </div>
                
                </form>

                <div className="text-center">
                    <h4>Ou</h4>

                    <h5>Se connecter avec:</h5>
                    <span>
                      
                        <a href="" type="button" className="btn-floating btn-fb waves-effect waves-light">
                            <i className="fa fa-facebook"></i>
                        </a>
                      
                        <a href="" type="button" className="btn-floating btn-gplus waves-effect waves-light">
                            <i className="fa fa-google-plus"></i>
                        </a>
                       
                        <a href="" type="button" className="btn-floating btn-tw waves-effect waves-light">
                            <i className="fa fa-twitter"></i>
                        </a>


                    </span>
                </div>
                <div className="options text-right">
                    <hr />
                    <p>Vous avez déjà un compte ? <a href="">Connexion</a></p>
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

export default Register;