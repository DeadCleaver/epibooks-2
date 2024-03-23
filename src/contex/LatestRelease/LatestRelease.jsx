import React, { createContext } from 'react'
import { useState } from 'react'

export const LatestRelease = createContext();

export default function LatestReleaseProvider({children}) {
    const [latestRelease, setLatestRelease] = useState(null);

    const value = {
        latestRelease,
        setLatestRelease
    }
  
    return (
        <LatestRelease.Provider value={value}>
            {children}
        </LatestRelease.Provider>
  )
}
