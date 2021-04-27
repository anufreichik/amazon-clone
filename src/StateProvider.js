//setup data layer
import React,  {createContext, useContext, useReducer} from "react";

//THIS is DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider=({reducer, initialState, children})=>(

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//this how we are using it
export const useStateValue = () => useContext(StateContext);
