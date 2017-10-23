import { connect } from 'react-redux'
import BottomMenu from '../components/BottomMenu.jsx'

const mapDispatchToProps = (dispatch) => {
        return {
                handleClick: (newPhoto) => {
                    dispatch(addPhoto(newPhoto))
                }
        }
}

export default connect(null, mapDispatchToProps)(BottomMenu)
