import {connect} from 'react-redux'
import {setSelectedPhoto} from '../actions'
import PhotoPopup from '../components/PhotoPopup.jsx'

const mapStateToProps = (state) => {
    return {
        photo: state.album.selectedPhoto
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => {
            dispatch(setSelectedPhoto(''))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPopup)
