import PropTypes from 'prop-types';
import '../../assets/css/ButtonGroup.css';

const ButtonGroup = (props) => {
  return (
    <>
      <button className={"buttonStyle1 green-bg color-1 btn" + (props.inputTransactionAmount ? "" : "disabled")}
          onClick={() => props.updateAccountBalance(true)}
          disabled={props.inputTransactionAmount < 0}
        >
          Credit amount
        </button>
        <button className={"buttonStyle1 red-bg color-1 btn" + ((props.inputTransactionAmount && props.inputTransactionAmount <= props.accountBalanceAmount)? "" : "disabled")}
          onClick={() => props.updateAccountBalance(false)}
          disabled={props.inputTransactionAmount < 0}
        >
          Debit amount
      </button>
    </>
  )
}

ButtonGroup.propTypes = {
  inputTransactionAmount: PropTypes.number,
  updateAccountBalance: PropTypes.func,
  accountBalanceAmount: PropTypes.number
}
export default ButtonGroup