'use client'

import { SessionProvider } from "next-auth/react"

export default function SessionProvid({children}:any){
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}