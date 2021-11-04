import { Container } from './style'
import income from '../../assets/income.svg'
import expense from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useContext } from 'react'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const {transactions} = useTransactions()
  console.log(transactions)

  const summary= transactions.reduce((acc,transaction)=>{
    if (transaction.type==='deposit'){
      acc.deposits+= transaction.amount;
      acc.total+= transaction.amount;
    } else{
      acc.withdraw += transaction.amount;
      acc.total-= transaction.amount;
    }

    return acc
  },{
    deposits:0,
    withdraw:0,
    total:0,
  })
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="income img" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency:'BRL'
            }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expense} alt="Saida" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency:'BRL'
            }).format(summary.withdraw)}</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{
              style:'currency',
              currency:'BRL'
            }).format(summary.total)}</strong>
      </div>
    </Container>
  ); 
}