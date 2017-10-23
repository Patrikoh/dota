import {connect} from 'react-redux'
import {setSelectedPhoto} from '../actions'
import Photo from '../components/Photo.jsx'

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedPhoto: (photo) => {
            dispatch(setSelectedPhoto(photo))
        }
    }
}

export default connect(null, mapDispatchToProps)(Photo)
