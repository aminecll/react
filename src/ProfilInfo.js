import React, { Component , Fragment } from 'react';


class ProfilInfo extends Component {
  

  render() {
    
    return (
        <Fragment>
      
        <div className="col-lg-9">
        <h4>Mes informations</h4>


            <hr/>  

        <div className="row">


            <div className="col-lg-1"></div>
            <div className="col-lg-8">
            <div className="fos_user_user_show">
                <p>username</p>
                <p>email</p>
            </div>


            </div>
        </div>
        </div>
        </Fragment>
    );
}
}

export default ProfilInfo;