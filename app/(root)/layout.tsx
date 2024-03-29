import React from 'react'

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main>
        Navbar
        {children}
        Footer    
    </main>
  )
}

export default RootLayout