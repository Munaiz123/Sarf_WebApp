"use client"
import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

function parseJwt(token) { 
// Function to parse JWT token (you would have this implemented)
    try {

      const [headerEncoded, payloadEncoded, signatureEncoded] = token.split('.');
  
      const base64 = payloadEncoded.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);

    } catch (error) {
      console.error("Parsing error:", error);
      return null;
    }
}

// Create the context
export const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

let firstName, lastName, email, sub, tokens;
let initalState = { firstName, lastName, email, sub, tokens, loggedIn:false}

export const UserProvider = ({ children }) => {
  const {push} = useRouter()
  const [user, setUser] = useState(initalState);

  const login = (tokensl) => {

    // let decodedIdToken = parseJwt(tokens.IdToken)

    let userObj = {
        // firstName:decodedIdToken.given_name,
        // lastName:decodedIdToken.family_name,
        // email:decodedIdToken.email,
        // sub:decodedIdToken.sub,
        // tokens,
        loggedIn:true
    }

    setUser(userObj)
    push("/dashboard")
    return
  }

  const employeeLogin = (tokens) =>{
    
    let decodedIdToken = parseJwt(tokens.IdToken)

    let employeeUserObj = {
      username:decodedIdToken["cognito:username"],
      firstName:decodedIdToken.given_name,
      lastName:decodedIdToken.family_name,
      employeeSub:decodedIdToken.sub,
      isManager:decodedIdToken["custom:is_manager"],
      adminSub:decodedIdToken["custom:admin_sub"],
      loggedIn:true
      
    }

    setUser(employeeUserObj)
    return
  }



  const logout = () =>{
    setUser(initalState)
    push('/')
    return
  }

  return (
    <UserContext.Provider value={{ user, login, employeeLogin, logout}}>
      {children}
    </UserContext.Provider>
  );

};
