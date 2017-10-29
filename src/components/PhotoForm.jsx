import React, {Component} from 'react';
import {Search} from 'material-ui-icons';

let iconStyle = {
  height: '24px',
  width: '24px'
};

class PhotoForm extends Component {

    render() {
        return (
            <div className="l-padding-top--huge l-padding-left--small l-columns">
                <input className="input input--with-button l-flex" id="search" value={this.filter} type="text"/>
                <div className="icon-wrapper l-flex l-margin-right--big" onClick={()=>{this.props.handleSubmit(document.getElementById('search').value)}}>
                    <Search className="icon icon--white" style={iconStyle}/>
                </div>
            </div>
        );
    }
};

export default PhotoForm;
