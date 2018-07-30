import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

var bgColors = {
    "Default": "orange",
    "Primary": "#00C851",
    "Danger": "red"
}
var tab = []

class ListEvent extends Component {
    state = {
        t: {}
    }

    componentDidMount() {

        console.log(this.props.user.first_name + ' ' + this.props.user.Last_name)

        {
            localStorage.getItem('user') ? this.props.user.roles == "ROLE_ORGANIZER" ? (
                Object.keys(this.props.events).map(el => this.props.events[el].organizer == (this.props.user.first_name + ' ' + this.props.user.Last_name) ? tab.push(this.props.events[el]) : null)) :
                Object.keys(this.props.events).map(el => tab.push(this.props.events[el]))
                : null
        }
        this.setState({ t: tab })
    }

    render() {

        return (


            <Fragment>
                {console.log(tab)}
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
                                    {Object.keys(this.state.t).map(el =>
                                        <tr>
                                            <td><a href="#">{this.state.t[el].titre}</a></td>
                                            <td>{this.state.t[el].category}</td>
                                            {this.state.t[el].validation == 0 ?
                                            <div>
                                            <td><p style={{ color: bgColors.Default }}>En Cours</p></td>
                                            <td> <a className="btn btn-success btn-sm" href="#"> Modifier </a></td> </div> :
                                            this.state.t[el].validation == 1 ?
                                            <div>
                                            <td> <p style={{color:bgColors.Primary}}>Validé</p></td>
                           <td>                           </td>
                           </div>
                           : 
                           <div>
                           <td> <p style={{color: bgColors.Danger}}>Refusé</p></td>
                           <td>                           </td>
                           </div>
                                            }
                                        </tr>
                                    )}

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

const mapStateToProps = state => ({

    user: state.authentication.user,
    events: state.events.events

});


export default connect(mapStateToProps)(ListEvent);