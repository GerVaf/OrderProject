export const reducer = (state,action)=>{
    switch(action.type){
        case "SHOW_ITEM":
            return {...state,items:action.payload};
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart,{...action.payload}]}
        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter(item => item.id !== action.payload.id)};
        case "REMOVE_FROM_ORDER":
            return {...state,item: [...state.item,{cart:state.cart.filter(item => item.id !== action.payload.id)}]}
        default:
            return state;
    }
}