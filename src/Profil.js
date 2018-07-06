import React, { Component } from 'react';
import ProfilInfo from './ProfilInfo';
import ProfilSide from './ProfilSide';
import Map from './Map'


class ProfileSide extends Component {
  

  render() {
    
    return (
        <div className="row">
            <ProfilSide />
            <ProfilInfo />
            <Map />
           

        </div>


    );
}
}

export default ProfileSide;