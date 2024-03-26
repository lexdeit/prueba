import axios from "axios"
import { Client } from "./_components/client"


const Page = async () => {

    const { data } = await axios.get('https://dev.obtenmas.com/catom/api/challenge/banks');

    return <Client initialData={data} />

}

export default Page