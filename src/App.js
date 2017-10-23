import React, {Component} from 'react';
import TopMenuContainer from './containers/TopMenuContainer';
import AlbumContainer from './containers/AlbumContainer';

class Application extends Component {
    render() {
        return (
            <div className="top-component">
                <TopMenuContainer/>
                <AlbumContainer/>
            </div>
        );
    }
}

export default Application;
