import { createContext } from "react";

export const GlobalContext = createContext(null);
const GlobalProvider = ({children}) => {
    const test = 'hello world'

    
    const data = {test}
    return (
        <GlobalContext.Provider value = {data}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;