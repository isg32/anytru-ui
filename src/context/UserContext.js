import React, { createContext, useState } from 'react';

// Create UserContext
export const UserContext = createContext();

// UserProvider to wrap components
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
