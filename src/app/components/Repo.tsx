
export async function Repo() {
    const response = await fetch('http://api.github.com/users/cesar-pinheiro/repos', {
        cache: "no-cache",
    })

    const repos = await response.json()

    return (
        <div>
            <h1>Repo</h1>
            <pre>{JSON.stringify(repos, null, 2)}</pre>
        </div>
    )
}