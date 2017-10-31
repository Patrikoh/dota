import {connect} from 'react-redux'
import {addPhoto, setFilteredPhotos, setPhotoCategories} from '../actions'
import Album from '../components/Album.jsx'

const mapStateToProps = (state) => {
    return {
        photos: state.album.photos,
        selectedPhoto: state.album.selectedPhoto,
        filter: state.album.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPhoto: (newPhoto) => {
            dispatch(addPhoto(newPhoto))
        },
        setFilteredPhotos: (filteredPhotos) => {
            dispatch(setFilteredPhotos(filteredPhotos))
        },
        setPhotoCategories: (categories) => {
            dispatch(setPhotoCategories(categories))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
