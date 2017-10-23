
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

export function setPhotoFilter(filter) {
    return {
        type: 'SET_PHOTO_FILTER',
        filter
    }
}
