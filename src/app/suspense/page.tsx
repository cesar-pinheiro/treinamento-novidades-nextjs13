'use client'

import Link from "next/link"
import { Suspense } from 'react'
// import { useRouter } from 'next/navigation'

import { Users } from '@/app/components/Users'
import { Comments } from "../components/Comments"

export default async function SuspensePage() {
    // const router = useRouter()
    // router.refresh()

    return (
        <div>
            <h1>Suspense</h1>
            <Link href="/">Home</Link>
            <Suspense fallback={<p>Carregando comentários...</p>}>
                <Comments />
            </Suspense>
            
            <Suspense fallback={<p>Carregando usuários...</p>}>
                <Users />
            </Suspense>
        </div>
    )
}
