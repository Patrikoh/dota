import React, {Component} from 'react';

class Photo extends Component {

    render() {
        const photo = this.props.photo;
        return (
            <div className={this.props.align === 'left'
                ? "l-flex l-padding-right--tiny l-padding-bottom--medium"
                : "l-flex l-padding-left--tiny l-padding-bottom--medium"}>
                <img onClick={()=>this.props.setSelectedPhoto(photo)} className="l-width--100 photo" src={photo.path} alt=""/>
            </div>
        );
    }
}

export default Photo;
