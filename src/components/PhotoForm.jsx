import React, {Component} from 'react';

class PhotoForm extends Component {

    render() {
        return (
            <div className="l-padding-top--huge">
                <input id="search" value={this.filter} type="text"/>
                <button onClick={()=>{this.props.handleSubmit(document.getElementById('search').value)}}>Submit</button>
            </div>
        );
    }
};

export default PhotoForm;
