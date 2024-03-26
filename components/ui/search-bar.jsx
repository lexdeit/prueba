import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Input } from "@nextui-org/input"
import qs from "query-string"
import { SearchIcon } from "@/icons/search-icon"


export const SearchBar = ({ initialValueKey, searchByClient }) => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const [search, setSearch] = useState({
        query: '',
        data: []
    });

    const valueKey = initialValueKey ? initialValueKey : 'bankName'

    const handleOnChangeSearch = e => {

        const value = e.target.value;
        const property = e.target.name;

        setSearch({ ...search, [property]: value });

        const current = qs.parse(searchParams.toString())

        const query = {
            ...current,
            page: 1,
            [valueKey]: value
        }

        if (current[valueKey] === value) {
            query[valueKey] = null
        }

        const url = qs.stringifyUrl(
            {
                url: window.location.href,
                query
            },
            { skipNull: true }
        )

        router.push(url)
    }


    return (
        <Input
            startContent={<SearchIcon />}
            className="border border-neutral-100 rounded-full shadow-md shadow-neutral-100"
            placeholder='Buscar...'
            classNames={{
                input: [
                    "bg-transparent",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "bg-white",
                ],
            }}
            onChange={searchByClient ? searchByClient : handleOnChangeSearch}
        />
    )
}