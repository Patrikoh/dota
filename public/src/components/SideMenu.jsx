import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

const albumIcon = require('../images/album.svg')

class SideMenu extends Component {

    render() {
        return (
            <div className="side-menu">
                <h1>{this.props.header}</h1>
                <div className="side-menu__menu">
                    {this.props.menuItems.map(item => (
                        <div className="menu-item"></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SideMenu;
