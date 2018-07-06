import React, { Component , Fragment } from 'react';


class ConfirmTable extends Component {
  

  render() {
    
    return (
        
        <div className="col-md-8 pb-5">
            <h2>Confirmation d'inscription</h2>
            
            <p> Vous êtes en train de confirmer votre inscription pour participer à l'atelier suivant:</p>

            <table>
                <tbody>
                    <tr>
                        <th>Titre</th>
                        <td>event</td>
                    </tr>
                    
                    <tr>
                        <th>Description</th>
                        <td>desc</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td>date debut</td>
                    </tr>
                    <tr>
                        <th>Prix total</th>
                        <td>prix €</td>
                    </tr>
                    <tr>
                        <th>Adresse</th>
                        <td>adresse<br/>
                        
                        </td>
                    </tr>
                    <tr>
                        <th>Organisateur</th>
                        <td>
                            
                                Organisateur</td>
                    </tr>
                        </tbody>
            </table>
                    <br/>
            </div>
            
        
    );
}
}

export default ConfirmTable;