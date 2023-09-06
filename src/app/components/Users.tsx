import Link from "next/link";

export async function Users() {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const resp = await fetch('https://jsonplaceholder.org/users/1', {
        cache: 'no-cache'
    })

    const users = await resp.json();

    return (
        <div>
            <h2>Users</h2>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    )
}