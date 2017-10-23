import React, {Component} from 'react';

class Photo extends Component {

    render() {
        const photo = this.props.photo;
        return (
            <div className={this.props.align === 'left'
                ? "l-flex l-padding-right--small l-padding-bottom--medium"
                : "l-flex l-padding-left--small l-padding-bottom--medium"}>
                <img onClick={()=>this.props.setSelectedPhoto(photo)} className="l-width--100 photo" src={photo.path} />
            </div>
        );
    }
}

export default Photo;
