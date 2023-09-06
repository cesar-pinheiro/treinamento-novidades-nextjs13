import Link from "next/link"

export default async function MultiplePromises() {
    const [resp1, resp2] = await Promise.all([
        fetch('http://api.github.com/users/cesar-pinheiro', {
            cache: "no-cache",
        }),
        fetch('http://api.github.com/users/cesar-pinheiro/repos', {
            cache: "no-cache",
        }),
    ])

    const user = await resp1.json()
    const repo = await resp2.json()

    return (
        <div>
            <h1>Multiple Promises</h1>
            <Link href="/">Home</Link>
            <h2>User</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <h2>Repo</h2>
            <pre>{JSON.stringify(repo, null, 2)}</pre>
        </div>
    )
}