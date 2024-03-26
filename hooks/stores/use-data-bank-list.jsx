import { create } from 'zustand'
import { persist } from "zustand/middleware";

export const useDataBankListStore = create(
    persist(
        (set, get) => ({
            bankList: [],
            setBankList: newData => set({ bankList: newData }),
            removeBank: (bankName) => set((state) => ({ bankList: state.bankList.filter(bank => bank.bankName !== bankName) })),
        }),
        { name: "bankListStorage" }
    )
);
