import {  useState, useEffect } from "react"
import { Container } from "./styles"
import {api} from "../../services/api"



interface Transaction{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}


export function Transaction(){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get('transactions')
      .then((response:any) => setTransactions(response.data.transactions))
      .catch(error => console.error(error));
    }, []);
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
        {transactions.map(transaction => (
            <tr key={transaction.id}>
            <td className='title'>{transaction.title}</td>
            <td className={transaction.type}>{new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency:'BRL'
            }).format(transaction.amount)}</td>
            <td>{transaction.category}</td>
            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </Container>
  )
}