import { cookies, headers } from 'next/headers'
import Link from "next/link"

export default function Cookies() {
    const userCookies = cookies()
    const userHeaders = headers()

    return (
        <div>
            <h1>Cookies</h1>
            <Link href="/">Home</Link>
            <h2>Cookies</h2>
            <pre>{JSON.stringify(userCookies, null, 2)}</pre>
            <h2>Headers</h2>
            <pre>{JSON.stringify(userHeaders, null, 2)}</pre>
        </div>
    )
}