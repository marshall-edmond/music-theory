import { createContext, useContext, useState } from 'react';
import type { ReactNode } from "react";

//shape of context
type AuthContextType = {
    token: string | null;
    isLoggedIn: boolean;
    login: (newToken: string) => void;
    logout: () => void;
}
//Create context set as null
const AuthContext = createContext<AuthContextType | null>(null);

//Component wraps entirety of the app for global login context 
export default function AuthProvider({ children }: { children: ReactNode }) {
    
    // pass current token to value
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("access_token")
    )
    //pass login function to value
    const login = (newToken : string) => {
        localStorage.setItem("access_token", newToken)
        setToken(newToken)
    }
    //pass logout function to value
    const logout = () => {
        localStorage.removeItem("access_token")
        setToken(null)
    } 
    //pass data to provider function
    const value = {
        token, 
        isLoggedIn: Boolean(token),
        login,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

    export function useAuth() {
    const context = useContext(AuthContext);

        if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
        }
    return context; 

}