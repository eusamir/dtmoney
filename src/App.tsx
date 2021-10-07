import {GlobalStyle} from './styles/global'
import Modal from 'react-modal'
import {Header} from './components/Header'
import { Dashboard } from './components/Dashboard';
import {createServer} from 'miragejs'
import {useState} from 'react'
import {NewTransactionModal} from './components/NewTransactionModal'

createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions',() =>{
      return[{
        id:1,
        title: 'Transactions',
        amout:400,
        type: 'deposit',
        category: 'food',
        createdAt: new Date(),

      }
    ]
    })
  }
})

Modal.setAppElement('#root');  

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
    setisNewTransactionModal(true);
  };
  function handleCloseNewTransactionModal(){
    setisNewTransactionModal(false);
  };
  return (  
    <>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <GlobalStyle />
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>  
  );
}


