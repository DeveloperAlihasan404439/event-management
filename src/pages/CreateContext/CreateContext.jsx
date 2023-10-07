import { createContext } from "react";

export const AuthContext = createContext(null)
const CreateContext = ({children}) => {
    const authInfo ={name: "ali"}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default CreateContext;