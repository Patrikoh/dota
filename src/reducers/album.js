const initialState = {
    photos: [
        {path: '../photos/malaysia1.jpg', title: 'The first Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the beginning of that trip', tags: ['forest']},
        {path: '../photos/malaysia2.jpg', title: 'The second Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the middle of that trip', tags: ['forest', 'beach']},
        {path: '../photos/malaysia3.jpg', title: 'The third Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the end of that trip', tags: ['beach']},
        {path: '../photos/malaysia1.jpg', title: 'The first Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the beginning of that trip', tags: ['forest']},
        {path: '../photos/malaysia2.jpg', title: 'The second Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the middle of that trip', tags: ['forest', 'beach']},
        {path: '../photos/malaysia3.jpg', title: 'The third Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the end of that trip', tags: ['beach']},
        {path: '../photos/malaysia1.jpg', title: 'The first Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the beginning of that trip', tags: ['forest']},
        {path: '../photos/malaysia2.jpg', title: 'The second Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the middle of that trip', tags: ['forest', 'beach']},
        {path: '../photos/malaysia3.jpg', title: 'The third Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the end of that trip', tags: ['beach']},
        {path: '../photos/malaysia1.jpg', title: 'The first Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the beginning of that trip', tags: ['forest']},
        {path: '../photos/malaysia2.jpg', title: 'The second Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the middle of that trip', tags: ['forest', 'beach']},
        {path: '../photos/malaysia3.jpg', title: 'The third Malaysia picture', description: 'This picture is taken during Patriks trip to Malaysia, in the end of that trip', tags: ['sea']},
    ],
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
