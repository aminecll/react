import React, { Component , Fragment } from 'react';

var bgColors = { "Default": "orange"}

class ListEvent extends Component {
  

  render() {
    
    return (
     
      <Fragment>
        <div className="row">
        <div className="col-lg-2"></div>

        <div className="col-lg-8 flex-center ">

            <br />

            <h3></h3>
            <div className="table-responsive">


                <table className="table ">
                    <thead>
                        <tr>

                            <th>
                                Atelier                     
                            </th>
                            <th>
                                Categorie
                            </th>
                            <th>
                                Etat
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>

                    </thead>
                    <tbody >
                        
                            <tr>
                                <td><a href="#">Event</a></td>

                                <td>Category</td>
                                
                                
                                    <td><p style={{color:bgColors.Default}}>En Cours</p></td>


                                    <td> <a className="btn btn-success btn-sm" href="#"> Modifier </a></td>

                                
                           
                          
                                                           
                         
                            </tr>

                       
                    </tbody>

                </table>
            </div>



        </div>
      




    </div>
                <br /> 
                <br />
                </Fragment>

    );
}
}

export default ListEvent;