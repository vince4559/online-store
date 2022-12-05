const ACTIONS = {
    ADD_TO_CART : 'add_to_cart',
    REMOVE_FROM_cART: 'remove_from_cart',
    CHANGE_CART_Qty: 'change_cart_qty'
}

export const reducer = (state, action) => {
switch(action.type){
    case ACTIONS.ADD_TO_CART: 
    return {...state, cart:[...action.cart, {...action.payload, qty:1} ]}
}
} 