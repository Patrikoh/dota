import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import PhotoContainer from '../containers/PhotoContainer.js';
import PhotoPopupContainer from '../containers/PhotoPopupContainer.js';
import SideMenuContainer from '../containers/SideMenuContainer.js';

class Album extends Component {

    filterPhotoList(list, filter) {
        if (!!filter) {
            let filteredList = [];
            list.map(item => {
                if (item.tags.includes(filter)) {
                    filteredList.push(item);
                }
                return filteredList;
            });
            return filteredList;
        } else {
            return list;
        }
    }

    splitPhotoList(list) {
        let leftColumn = [];
        let rightColumn = [];
        list.map((item, index) => {
            if (index % 2 === 0) {
                leftColumn.push(item);
            } else {
                rightColumn.push(item);
            }
            return true;
        })
        return {leftColumn, rightColumn};
    }

    getPhotoCategories(photos) {
        let photoCategories = [];
        photos.map(photo => {
            photo.tags.map(tag => {
                if (!photoCategories.includes(tag)) {
                    photoCategories.push(tag);
                };
                return photoCategories;
            });
            return photoCategories;
        });
        return photoCategories;
    }

    render() {
        this.filteredPhotos = this.splitPhotoList(this.filterPhotoList(this.props.photos, this.props.filter));
        this.photoCategories = this.getPhotoCategories(this.props.photos);

        this.props.setFilteredPhotos(this.filteredPhotos);
        this.props.setPhotoCategories(this.photoCategories);

        return (
            <div className="l-wrapper">
                <SideMenuContainer />

                <div className="l-flex--8 l-margin-top--huge l-height--100-top l-overflow--scroll">
                    <div className="l-columns l-flex">
                        <div className="l-flex">
                            {this.filteredPhotos.leftColumn.map(photo => (<PhotoContainer align='left' photo={photo}/>))}
                        </div>
                        <div className="l-flex">
                            {this.filteredPhotos.rightColumn.map(photo => (<PhotoContainer align='right' photo={photo}/>))}
                        </div>
                    </div>

                </div>
                <div className="l-flex--2 l-padding-left--big">
                    <Paper className="side-menu" zDepth={1}></Paper>
                </div>

                {!!this.props.selectedPhoto
                    ? <PhotoPopupContainer/>
                    : null}
            </div>
        )
    }
}

export default Album;
