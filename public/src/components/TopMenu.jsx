import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const albumIcon = require('../images/album.svg');
const camera = require('../images/camera.png');

class TopMenu extends Component {
    render() {
        return (
            <div className="top-menu l-columns l-text-align--right">
                <h1 className="l-flex l-padding-right--medium l-margin-top--big">Peter Photos</h1>
            </div>
        );
    }
}

export default TopMenu;
