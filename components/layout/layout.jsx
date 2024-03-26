'use client'
import { Footer } from "./footer"

export const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}