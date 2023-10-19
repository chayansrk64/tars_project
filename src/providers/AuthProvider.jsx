import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const user = "Manik Miya";


const userInfo = {
    user,
    
}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;