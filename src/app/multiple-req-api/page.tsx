import Link from "next/link";
import { User } from "../components/User";
import { Repo } from "../components/Repo";

/*
    Aqui mostra um exemplo de como o next lida com multiplas requisições assincronas
    na qual identifica que uma não depende da outra e as executam em paralelo sem ter
    que uma aguardar a outra finalizar.
*/

export default async function MultipleRequireAPI() {
    return (
        <div>
            <h1>Multiple Require API</h1>
            <p><Link href="/">Home</Link></p>
            <User />
            <Repo />
        </div>
    )
}