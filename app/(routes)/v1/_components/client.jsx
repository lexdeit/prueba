'use client'
import { SearchBar } from "@/components/ui/search-bar"
import { BankCard } from "@/components/ui/bank-card"
import { BankCardSkeleton } from "@/components/ui/bank-card-skeleton"

export const Client = ({ initialData }) => {

    const data = initialData;

    return (
        <div
            className="w-full min-h-screen h-full flex flex-col justify-start items-center py-12 px-4 md:p-0 md:pt-12"
        >

            <section
                className="w-full h-full flex flex-col gap-12 justify-center max-w-sm md:max-w-4xl"
            >

                <SearchBar />

                <div
                    className="flex flex-col md:grid md:grid-cols-2 gap-4"
                >
                    {data.length > 0 ?
                        data.map(({ bankName, description, age, url }, index) => (
                            <BankCard
                                key={index}
                                bankName={bankName}
                                description={description}
                                age={age}
                                url={url}
                            />
                        ))
                        :
                        Array(6).fill().map((item, index) => (
                            < BankCardSkeleton key={index} />
                        ))
                    }
                </div>

            </section>

        </div>
    )
}