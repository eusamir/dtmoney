import { Container } from './style'
import income from '../../assets/income.svg'
import expense from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransacionsContext'

export function Summary() {
  const transactions = useContext(TransactionsContext)
  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="income img" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expense} alt="Saida" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}