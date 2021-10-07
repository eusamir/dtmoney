import { Summary } from "../Summary";
import { Transaction } from "../Transactions";
import { Container } from "./style";

export function Dashboard (){
  return (
    <Container>
      <Summary/>
      <Transaction/>
    </Container>
  )
}