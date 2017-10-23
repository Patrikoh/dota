import React, { Component } from 'react';
import TopMenuContainer from './containers/TopMenuContainer';
import BottomMenuContainer from './containers/BottomMenuContainer';
import AlbumContainer from './containers/AlbumContainer';
import Paper from 'material-ui/Paper';


class Application extends Component {
        render() {
                return (
                        <div className="top-component">
                                <TopMenuContainer />
                                <AlbumContainer />
                        </div>
                );
        }
}

export default Application;
