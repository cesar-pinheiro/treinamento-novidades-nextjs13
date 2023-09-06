import Link from "next/link";

export async function Comments() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const resp = await fetch('https://jsonplaceholder.org/comments/1', {
        cache: 'no-cache'
    })

    const users = await resp.json();

    return (
        <div>
            <h2>Comments</h2>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    )
}