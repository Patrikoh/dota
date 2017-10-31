import config from '../config/photos.json';


const initialState = {
    photos: Object.values(config.photos),
    filteredPhotos: [],
    photoCategories: [],
    selectedPhoto: '',
    filter: ''
}

export default function album(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PHOTO':
            return {
                ...state,
                photos: [...state.photos, action.newPhoto]
            }

        case 'SET_SELECTED_PHOTO':
            return {
                ...state,
                selectedPhoto: action.photo
            }

        case 'SET_FILTERED_PHOTOS':
            return {
                ...state,
                filteredPhotos: action.photos
            }

        case 'SET_PHOTO_CATEGORIES':
            return {
                ...state,
                photoCategories: action.categories
            }

        case 'SET_PHOTO_FILTER':
            return {
                ...state,
                filter: action.filter
            }

        default:
            return state
    }
}
