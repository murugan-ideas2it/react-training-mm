import { useState } from "react";
import PropTypes from 'prop-types';
import Accountdetails from "./Accountdetails";
import ButtonGroup from "./ButtonGroup";
import '../../assets/css/form.css';

const Form = (props) => {
  const [inputTransactionAmount, setInputTransactionAmount] = useState(0);

  const updateAccountBalance = isCredit => {
    if (inputTransactionAmount) {
      const transactionMethod = isCredit ? 'Credited' : 'Debited';
      if(isCredit || (!isCredit && inputTransactionAmount <= props.accountBalanceAmount))
      props.updateTransactionHistory({
        accountBalance: isCredit ? props.accountBalanceAmount + inputTransactionAmount : props.accountBalanceAmount - inputTransactionAmount,
        transactionType: transactionMethod,
        transactionAmount: inputTransactionAmount,
        Accountstatement: `Your account got ${transactionMethod.toLowerCase()} Rs. ${inputTransactionAmount}`
      });
      setInputTransactionAmount(0);
    }
  };

  return (
    <>
      <div className="border1 pad-30 w-30">
        <Accountdetails accountBalanceAmount={props.accountBalanceAmount} />
        <div className="ds-block">
          <div className="ds-block">
            <input
              min="0"
              type="number"
              value={inputTransactionAmount}
              id="inputTransactionAmountField"
              placeholder="Enter Amount"
              onChange={(e) => setInputTransactionAmount((e.target.valueAsNumber > 0) ? e.target.valueAsNumber : "")}
            />
          </div>
          <br />
          <ButtonGroup
            updateAccountBalance={updateAccountBalance}
            inputTransactionAmount={inputTransactionAmount}
            accountBalanceAmount={props.accountBalanceAmount}
          />
        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  accountBalanceAmount: PropTypes.number,
  updateTransactionHistory: PropTypes.object
}

export default Form