import { Input } from "@nextui-org/input"
import { SearchIcon } from "@/icons/search-icon"


export const SearchBar = ({ initialValueKey, searchByClient }) => {

    return (
        <Input
            startContent={<SearchIcon />}
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