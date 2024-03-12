import PropTypes from 'prop-types';

const Accountdetails = ({ accountBalanceAmount }) => {

  return (
    <>
      <div className="ds-block">
        <h4>Account Balance Amount: Rs.{accountBalanceAmount} </h4>
      </div>
    </>
  )
}

Accountdetails.propTypes = {
  accountBalanceAmount: PropTypes.number
}

export default Accountdetails