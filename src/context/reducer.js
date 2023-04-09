export const reducer = (state,action)=>{
    switch(action.type){
        case "SHOW_ITEM":
            return {...state,items:action.payload};
        case "ADD_TO_CART":
        const ite =  state.items.map(el => {
                if(el.id == action.payload.id){
                    el.added = true;
                }
                return el
            })
            return {...state,items : ite,cart:[...state.cart,{...action.payload}]}
        case "REMOVE_FROM_CART":
        const  itm =  state.items.map(el => {
                if(el.id == action.payload.id){
                    el.added = false;
                }
                return el
            })
            return {...state,items : itm,cart:state.cart.filter(item => item.id !== action.payload.id)};
        case "REMOVE_FROM_ORDER":
            return {...state,item: [...state.item,{cart:state.cart.filter(item => item.id !== action.payload.id)}]}
        default:
            return state;
    }
}