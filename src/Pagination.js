import React, { Component , Fragment } from 'react';

class Pagination extends Component {
    render() {
        return(
            <Fragment>
                <nav className="Pagination flex-center wow fadeIn" data-wow-delay="0.2s">
                <div className="navigation">
                    <ul className="navigation">
                        <li className="page-item active">
                            <span className="page-link waves-effect waves-effect">1</span>
                        </li>
                       
                        <li className="page-item ">
                            <span className="page-link waves-effect waves-effect">2</span>
                        </li>
                    </ul>
                </div>
                </nav>
            </Fragment>    
);
}
}

export default Pagination;