import Link from "next/link"

interface ProductProps {
    params: {
        id: string
    }
}

export default function Product({ params }: ProductProps) {
    return (
        <>
            <h1>Product: {params.id}</h1>
            <Link href="/">Home</Link>
        </>
    )   
}