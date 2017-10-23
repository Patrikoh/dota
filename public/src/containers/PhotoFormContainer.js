import {connect} from 'react-redux'
import {setPhotoFilter} from '../actions'
import PhotoForm from '../components/PhotoForm.jsx'

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (filter) => {
            dispatch(setPhotoFilter(filter))
        }
    }
}

export default connect(null, mapDispatchToProps)(PhotoForm)
