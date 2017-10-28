import { combineReducers } from 'redux'
import album from './album'

//combining all reducers in the application
const app = combineReducers({
    album
})

export default app
