import { useState, useEffect } from "react";
import Form from "./Form";
import HistoryList from "./HistoryList";
import '../../assets/css/parent.css'

function BankingTransactionParentComponent() {
  const [searchText, updateSearchText] = useState('');
  const [dataToShow, updateData] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([{
    accountBalance: 1000,
    Accountstatement: "Account initial amount",
    transactionType: "Credited",
    transactionAmount: 1000
  }]);
  const [accountBalanceAmount, setAccountBalanceAmount] = useState(1000);

  useEffect(() => {
    const result = transactionHistory.filter(transactionDetail => transactionDetail.transactionType.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    updateData(searchText ? (result || []) : [...transactionHistory]);
  }, [searchText]);

  useEffect(() => {
    updateData([...transactionHistory]);
  }, []);

  const updateTransactionHistory = (transactionHistoryData) => {
    const result = [transactionHistoryData, ...transactionHistory];
    setAccountBalanceAmount(transactionHistoryData.accountBalance);
    setTransactionHistory(result);
    updateData(result);
  }
  const updateSearchedText = (updateSearchedKey) => {
    updateSearchText(updateSearchedKey)
  }
  return (
    <>
    {/* <input type="text" placeholder="Search" value={searchText} onChange={e => updateSearchText(e.target.value || '')} /> */}
      <div className="ds-flex content-box">
        <Form updateTransactionHistory={updateTransactionHistory} accountBalanceAmount={accountBalanceAmount} />
        <HistoryList transactionHistory={dataToShow} updateSearchedText={updateSearchedText}  />
      </div>
    </>
  );
}

export default BankingTransactionParentComponent