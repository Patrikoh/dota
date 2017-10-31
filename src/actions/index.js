
export function editFormText(text) {
    return {
        type: 'EDIT_FORM_TEXT',
        text
    }
}

export function addPhoto(newPhoto) {
    return {
        type: 'ADD_PHOTO',
        newPhoto
    }
}

export function setSelectedPhoto(photo) {
    return {
        type: 'SET_SELECTED_PHOTO',
        photo
    }
}

export function setFilteredPhotos(photos) {
    return {
        type: 'SET_FILTERED_PHOTOS',
        photos
    }
}

export function setPhotoCategories(categories) {
    return {
        type: 'SET_PHOTO_CATEGORIES',
        categories
    }
}

export function setPhotoFilter(filter) {
    return {
        type: 'SET_PHOTO_FILTER',
        filter
    }
}
