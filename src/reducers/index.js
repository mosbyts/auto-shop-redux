export default (state, action) => {
    switch (action.type){
        case "add_to_cart":
            return {
                ...state,
                add_to_cart: action.clicked
            }
        default:
            return state
    }
}