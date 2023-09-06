'use client'

import Link from "next/link"
import { useState } from 'react'

export default function UseClient() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Use Client</h1>
            <Link href="/">Home</Link>
            <h2>{count}</h2>
            <button onClick={() => setCount((state) => state + 1)}>Increment</button>
        </>
    )
}