
const initialState = {
        header: "Kategorier",
    menuItems: [ {
            categoryName: "Landskap"
    },
{
        categoryName: "Fåglar"
}]
}


export default function sideMenu(state = initialState, action) {
    switch (action.type) {

        case 'UPDATE_TEXT':
            return Object.assign({}, state, {
                text: action.text})
        default:
            return state
    }
}
