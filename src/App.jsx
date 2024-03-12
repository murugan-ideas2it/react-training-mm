import './App.css'
import Header from './Components/Header.jsx'
import EmployeeManagementParentComponent from './Components/EmployeeManagement/ParentComponent.jsx'
// import BankingTransactionParentComponent from './Components/BankingTransaction/ParentComponent.jsx'

function App() {
  

  onabort
  return (
    <>
      <Header />
      {/* <BankingTransactionParentComponent /> */}
      <div className='body-content ds-flex'>
        <div className='sideNavBar'></div>
        <div className='center-body-content'>
          <EmployeeManagementParentComponent />
        </div>
      </div>
    </>
  ) 

}

export default App




