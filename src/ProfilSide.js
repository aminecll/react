import React, { Component } from 'react';



class ProfileSide extends Component {
  

  render() {
    
    return (
        <div className="col-lg-3">
           

                <div className="avatar text-center"><img src={"/images/avatar.jpg"} className="img-circle img-responsive"  height="150" width="150" styles={"borderRadius: 50%"} />
                </div>
          
            <br/>
            
                <p align="center"> UTILISATEUR</p>
            
              
        <div className="well">
        <ul className="nav nav-list">
            <li>
                <a href="#">Mes informations</a>
            </li>
            <br />
            <li>
                <a href="#">Editer mes informations</a>
            </li>
            <br />
            <li>
                <a href="#">Changer mot de passe</a>
            </li>
            <br />
            <li>
                <a href="#">Informations de profile</a>
            </li>
            <br />

            <li>
                <a href="#">Déconnexion</a>
            </li>
            <br />
        </ul>
        </div>
        </div>


    );
}
}

export default ProfileSide;