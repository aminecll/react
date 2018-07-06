import React, { Component , Fragment } from 'react';
import ConfirmTable from './ConfirmTable';
import Terms from './Terms';
import Map from './Map'


class Participe extends Component {
  

  render() {
    
    return (
        <Fragment>
            <ConfirmTable />
            <Map />
            <Terms />
        </Fragment>
    );
}
}

export default Participe;