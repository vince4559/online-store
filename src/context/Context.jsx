import React,{useContext, createContext, useReducer} from 'react';
import { reducer } from './reducer';
import { products } from '../data';

const AppContext = createContext()
const Context = ({children}) => {
    const [ state, dispatch] = useReducer(reducer, {
        products,
        cart:[]
    })
  return (
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
  )
}
export default Context

export const DataProvider = () => {
    return useContext(AppContext)
}
