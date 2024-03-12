import { useState } from "react";
import PropTypes from 'prop-types';
import '../../assets/css/historyStyle.css'

const HistoryList = (props) => {
  const [searchText, updateSearchText] = useState(props.updateSearchText);

  return (
    <>
      <div className="ds-flex history-box border1">
        <div className="ds-block pad-30">
          <h3>Account Transaction History</h3>
          <input type="text" placeholder="Search" value={searchText} onChange={e => updateSearchText(e.target.value || '')} />
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Details</th>
                <th>Debit/Credit</th>
                <th>Debit/Credit Amount</th>
                <th>Account Balance</th>
              </tr>
            </thead>
            <tbody>
              {props.transactionHistory.map((history, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td> {history.Accountstatement}</td>
                  <td> {history.transactionType}</td>
                  <td className={history.transactionType == 'Debited' ? "red-txt" : "green-txt"}>
                    {history.transactionType == "Debited" ? "-" : ""}Rs.{history.transactionAmount}
                  </td>
                  <td>Rs.{history.accountBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

HistoryList.propTypes = {
  updateSearchText: PropTypes.func,
  transactionHistory: PropTypes.object
}

export default HistoryList