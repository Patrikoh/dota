import {connect} from 'react-redux'
import {setPhotoFilter} from '../actions'
import SideMenu from '../components/SideMenu.jsx'

const mapStateToProps = (state) => {
    return {
        filteredPhotos: state.album.filteredPhotos,
        photoCategories: state.album.photoCategories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (filter) => {
            dispatch(setPhotoFilter(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
