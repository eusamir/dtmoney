import {createContext, useState, useEffect, ReactNode} from 'react'
import {api} from './services/api'

export const TransactionsContext= createContext<TransactionsContextData>({} as TransactionsContextData);

interface Transaction{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
interface TransactionsProviderProps{
  children: ReactNode;
}
interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction:(transaction: TransactionInput) => void
}
type TransactionInput = Omit<Transaction, 'id'| 'createdAt'>
export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get('transactions')
      .then((response:any)=> setTransactions(response.data.transactions))
      .catch(error => console.error(error));
    }, []);

  function createTransaction(transaction:TransactionInput){
    api.post('/transactions', transaction)
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
};
