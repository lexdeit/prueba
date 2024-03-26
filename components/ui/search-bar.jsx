import { Input } from "@nextui-org/input"
import { SearchIcon } from "@/icons/search-icon"


export const SearchBar = ({ searchByClient }) => {

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