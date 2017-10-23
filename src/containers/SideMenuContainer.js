import { connect } from 'react-redux'
import SideMenu from '../components/SideMenu.jsx'

const mapStateToProps = (state) => {
        return {
                header: state.sideMenu.header,
                menuItems: state.sideMenu.menuItems
        }
}

export default connect(mapStateToProps, null)(SideMenu)
