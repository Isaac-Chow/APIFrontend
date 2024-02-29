import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext("ananymous");

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: "",
        token: null,
    });

    const auth = localStorage.getItem('user_token') ? localStorage.getItem('user_token') : null;
    if (auth) {
        setUser({ token: auth });
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
