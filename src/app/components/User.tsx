
export async function User() {
    const response = await fetch('http://api.github.com/users/cesar-pinheiro', {
        cache: "no-cache",
    })

    const user = await response.json()

    return (
        <div>
            <h1>User</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}