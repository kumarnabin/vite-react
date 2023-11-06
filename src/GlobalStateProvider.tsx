import React, {createContext, useContext, useReducer} from "react";

const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({children}) => {
    const initialState = {
        someData: "",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_DATA":
                return {...state, someData: action.payload};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalStateContext.Provider>
    );
};
