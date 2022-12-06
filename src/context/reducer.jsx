export const ACTIONS = {
    ADD_TO_CART : 'add_to_cart',
    REMOVE_FROM_cART: 'remove_from_cart',
    CHANGE_CART_Qty: 'change_cart_qty'
}

 export const FILTERACTIONS ={
    SORT_BY_PRICE: 'SORT_BY_PRICE',
    FILTER_BY_STOCK: 'FILTER_BY_STOCK',
    FILTER_BY_DELIVERY: 'FILTER_BY_DELIVERY',
    FILTER_BY_RATING: 'FILTER_BY_RATING',
    FILTER_BY_SEARCH: 'FILTER_BY_SEARCH',
    CLEAR_FILTER: 'CLEAR_FILTER'
 }

export const cartReducer = (state, action) => {
switch(action.type){
    case ACTIONS.ADD_TO_CART: 
    return  {...state, cart:[...state.cart, {...action.payload, qty:1}] };
    case ACTIONS.REMOVE_FROM_cART:
        return {
            ...state, 
            cart: state.cart.filter(c => c.id !== action.payload.id)
        }
        case ACTIONS.CHANGE_CART_Qty:
            return {
                ...state, 
            cart: state.cart.filter(c => 
                c.id === action.payload.id? c.qty=action.payload.qty : c.qty)
            }
    }
} 



export const filterReducer = (state, action) => {
    switch(action.type){
        case FILTERACTIONS.SORT_BY_PRICE:
            return {...state, sort: action.payload};
        case FILTERACTIONS.FILTER_BY_STOCK:
            return{...state, byStock: !state.byStock};
        case FILTERACTIONS.FILTER_BY_DELIVERY:
            return{...state, byFastDelivery: !state.byFastDelivery} ;        
        case FILTERACTIONS.FILTER_BY_RATING:
             return{...state, byRating: action.payload};
        case FILTERACTIONS.FILTER_BY_SEARCH:
            return{...state, searchQuery: action.payload};
            case FILTERACTIONS.CLEAR_FILTER:
             return{
                byStock: false,
                byFastDelivery: false,
                byRating:0,
                searchQuery: '',
            }
            default:
                return state
    }
}