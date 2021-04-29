export const initialState={
    basket:[{
        id:"123234433",
        title:"2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (4th Generation)",
        price:559.99,
        rating:5,
        image:
        "https://m.media-amazon.com/images/I/719UcXKzXHL._AC_UY327_FMwebp_QL65_.jpg"
    }],
    user:null,
}

function reducer(state=initialState, action){
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {...state, basket: [...state.basket, action.item]};

            //logic adding to basket
        case 'REMOVE_FROM_BASKET':
            return {...state, basket:[...state.basket].filter(el=>el.id!==action.id)};
            break;
        default:
            return {state};
    }
}
export default reducer;
