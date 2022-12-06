import React,{useContext, createContext, useReducer} from 'react';
import { cartReducer, filterReducer } from './Reducer';
import { products } from '../data';

const AppContext = createContext()
const Context = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: [],
  }); 

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating:0,
    searchQuery: '',
  })

  return (
    <AppContext.Provider value={{state, dispatch,filterState ,filterDispatch}}>
        {children}
    </AppContext.Provider>
  )
}
export default Context

export const DataProvider = () => {
    return useContext(AppContext)
}
