import Link from "next/link"

export default async function Home() {

  return (
    <div>
        <h1>Home</h1>
        <p><Link href = "/signin">SignIn</Link></p>
        <p><Link href = "/app">App</Link></p>
        <p><Link href = "/app/products/xxx">App / Product</Link></p>
        <p><Link href = "/dashboard">Dashboard</Link></p>
        <p><Link href = "/ssr-static">SSR Static</Link></p>
        <p><Link href = "/multiple-req-api">Multiple Require API</Link></p>
        <p><Link href = "/multiple-promises">Multiple Promises</Link></p>
        <p><Link href = "/cookies">Cookies</Link></p>
        <p><Link href = "/suspense">Suspense</Link></p>
        <p><Link href = "/use-client">Use Client</Link></p>
        <p><Link href = "/dynamic-title/Bla_bla">Dynamic Title</Link></p>
    </div>
  )
}
