import React, { Component } from 'react'
import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';
import './button.css';
import './dropdown.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TriMoinsCher } from './actions/TriMoinsCher'
import { TriPlusCher } from './actions/TriPlusCher'
import { TriPlusProche } from './actions/TriPlusProche'
import { TriPlusAvancé } from './actions/TriPlusAvancé'

class Tri extends Component {
    render() {
        return (
            <div className="dropdown show" >
            

                <DropdownButton className =" btn btn-primary-atelier btn-md pull-right waves-effect waves-light" id="tri_btn"
                    btnSize="lg"
                    title='Trier par'
                    
                >
                    <MenuItem onSelect={() => {this.props.TriMoinsCher('Prix (moins cher)')}}> Prix (moins cher)</MenuItem>
                    <MenuItem onSelect={() => {this.props.TriPlusCher('Prix ( Plus cher)')}}> Prix ( Plus cher)</MenuItem>
                    <MenuItem onSelect={() => {this.props.TriPlusProche('Plus proche')}}>Plus proche</MenuItem>
                    <MenuItem onSelect={() => {this.props.TriPlusAvancé('Plus Avancé')}}>Plus avancé</MenuItem>
                </DropdownButton>




            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({  TriMoinsCher, TriPlusCher , TriPlusAvancé, TriPlusProche}, dispatch)}

export default connect(null, mapDispatchToProps)(Tri);;;