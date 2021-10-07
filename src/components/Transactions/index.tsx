import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"
export function Transaction(){
  useEffect(() =>{
    api.get('transactions')
    .then(response => console.log(response.data))
  },[]);
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
          <tr>
            <td className="title">Desenvolvimento de site</td>
            <td className='income'>R$12.0000,00</td>
            <td>Venda</td>
            <td>12/09/2021</td>
          </tr>
          <tr>
            <td className="title">Hamburguer</td>
            <td className='outcome'>-R$59,00</td>
            <td>Compra</td>
            <td>22/09/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className='outcome'>-R$1.3000,00</td>
            <td>Casa</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td className="title">Computador</td>
            <td className='income'>R$5.0000,00</td>
            <td>Venda</td>
            <td>15/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}