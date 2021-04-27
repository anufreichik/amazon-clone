export const initialState={
    basket:[],
}

function reducer(state=initialState, action){
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {...state, basket:action.item};
            break;
            //logic adding to basket
        case 'REMOVE_FROM_BASKET':
            return {state};
            break;
        default:
            return {state};
    }
}
export default reducer;
