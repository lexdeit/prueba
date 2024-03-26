import axios from "axios"
import { Client } from "./_components/client"


const Page = async ({ searchParams }) => {

    const { bankName } = searchParams;

    const controller = new AbortController()

    const { data } = await axios.get('https://dev.obtenmas.com/catom/api/challenge/banks', {
        signal: controller.signal
    });

    controller.abort()

    const formattedData = bankName?.length > 1 ? data.filter(bank =>
        bank.bankName.toLowerCase().includes(bankName.toLowerCase())
    ) : data


    return <Client initialData={formattedData} />
}

export default Page