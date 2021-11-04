import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
interface TransactionsProviderProps {
  children: ReactNode;
}
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

type ApiResponse = { transactions: Transaction[] };

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get<ApiResponse>("transactions");
        setTransactions(data.transactions);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  //outra forma de ultilizar é com .then
  //api('transactions')
  //.then(response => setTransactions(response.data.transactions))
  //}, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
export function useTransactions(){
  const context=useContext(TransactionsContext)
  
  return context
}