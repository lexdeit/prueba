'use client'
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/ui/search-bar";
import { BankCard } from "@/components/ui/bank-card";
import { BankCardSkeleton } from "@/components/ui/bank-card-skeleton";
import { useDataBankListStore } from "@/hooks/stores/use-data-bank-list";

export const Client = ({ initialData }) => {

    const { bankList, setBankList, removeBank } = useDataBankListStore();
    const [filteredBanks, setFilteredBanks] = useState([...initialData]);

    useEffect(() => {
        setBankList(initialData)
    }, [initialData])

    const handleSearch = (event) => {

        const bankNameToSearch = event.target.value;

        if (bankNameToSearch.length > 0) {
            const filteredBanks = bankList.filter(bank => bank.bankName.toLowerCase().includes(bankNameToSearch.toLowerCase()));
            setFilteredBanks(filteredBanks);
        } else {
            setFilteredBanks(bankList)
        }

    };

    const handleDeleteBank = (bankName) => {
        removeBank(bankName);
        setFilteredBanks(filteredBanks.filter(bank => bank.bankName !== bankName));
    };

    return (
        <div className="w-full min-h-screen h-full flex flex-col justify-start items-center py-12 px-4 md:p-0 md:pt-12">
            <section className="w-full h-full flex flex-col gap-12 justify-center max-w-sm md:max-w-4xl">
                <SearchBar searchByClient={handleSearch} />

                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    {filteredBanks && filteredBanks.length > 0 ?
                        filteredBanks.map(({ bankName, description, age, url }, index) => (
                            <BankCard
                                key={index}
                                bankName={bankName}
                                description={description}
                                age={age}
                                url={url}
                                onDelete={() => handleDeleteBank(bankName)}
                            />
                        ))
                        :
                        Array(6).fill().map((item, index) => (
                            <BankCardSkeleton key={index} />
                        ))
                    }
                </div>
            </section>
        </div>
    );
};
