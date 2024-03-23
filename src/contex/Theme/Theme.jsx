import React, { createContext } from 'react'
import { useState } from 'react'

export const Theme = createContext(null);

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const value = {
        theme,
        setTheme
    }
  
    return (
        <Theme.Provider value={value}>
            {children}
        </Theme.Provider>
  )
}
