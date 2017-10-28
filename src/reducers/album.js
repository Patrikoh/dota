import config from '../config/photos.json';


const initialState = {
    photos: Object.values(config.photos),
    selectedPhoto: '',
    filter: ''
}

export default function album(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PHOTO':
            return {
                ...state, photos: [...state.photos, action.newPhoto]
            }

        case 'SET_SELECTED_PHOTO':
            return {
                ...state, selectedPhoto: action.photo
            }

        case 'SET_PHOTO_FILTER':
            return {
                ...state, filter: action.filter
            }

        default:
            return state
    }
}
