import Link from "next/link"

interface DynamicTitleProps {
    params: {
        title: string
    }
}

export async function generateMetadata({ params }: DynamicTitleProps) {
    return {
        title: `Title - ${params.title}`
    }
}

export default function DynamicTitle({ params }: DynamicTitleProps) {
    return (
        <>
            <h1>Dynamic Title - {params.title}</h1>
            <Link href="/">Home</Link>
        </> 
    )
}