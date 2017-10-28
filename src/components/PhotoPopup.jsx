import React, {Component} from 'react';

class PhotoPopup extends Component {

    render() {
        const photo = this.props.photo;
        return (
            <div className="grey-out">
                <div className="photo-popup">
                    <div className="photo-popup--img-wrapper">
                        <div className="photo-popup--img">
                            <div className="photo-popup--top">
                                {photo.title}
                                <svg onClick={() => this.props.handleClose()} fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                            <img src={photo.path} alt=""/>
                            <div className="photo-popup--desc l-rows">
                                <p className="l-flex">{photo.description}</p>
                                <div className="l-columns l-padding-bottom--small">
                                    <div className="l-flex--3"/>
                                    <div className="l-flex photo-popup--desc_line"/>
                                    <div className="l-flex--3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoPopup;
