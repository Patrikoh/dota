import { combineReducers } from 'redux'
import sideMenu from './sideMenu'
import album from './album'

//combining all reducers in the application
const app = combineReducers({
    sideMenu,
    album
})

export default app
