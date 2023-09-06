import { ReactNode } from "react";

interface DynamicTitleLayoutProps {
    children: ReactNode
}

export const metadata = {
    title: {
        default: 'Dynamic Title',
        template: '%s | Dynamic Title'
    },
}

export default function DynamicTitleLayout({ children }: DynamicTitleLayoutProps) {
    return (
        <>
            <h1>Dynamic Title Layout</h1>
            {children}
        </>
    )
}