import Image from 'next/image'
import Link from "next/link"

/*
export const revalidate = 30; // next irá revalidar todas as chamadas desta página no período de 30 segundos, ou seja, antes dos 30 segundos a informação é estática, após será atualizada
*/

export default async function SSRStatic() {
  const response = await fetch('https://api.github.com/users/cesar-pinheiro', {
    next: {
      revalidate: 30, // next irá revalidar esta chamada no período de 30 segundos, ou seja, antes dos 30 segundos a informação é estática, após será atualizada
    }
  })

/*
  const resp2 = await fetch('https://api.github.com/users/cesar-pinheiro', {
    cache: "force-cache" // next força uma versão cacheada para todos os usuários, ou seja, uma única vez gera a informação estática e esta é fornecida para todos os usuários em qualquer requisição.
    //cache: "no-store" // next gera um cache a nível de usuário, ou seja, cada requisição será gerada estáticamente individualmente para cada usuário diferente.
  })
*/

  const user = await response.json()

  return (
    <div>
        <h1>SSR Static</h1>
        <Link href ="/">Home</Link>
        <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
