import PropTypes from 'prop-types';
import '../../assets/css/ButtonGroup.css';

const ButtonGroup = (props) => {
  return (
    <>
      <button
        className={"bg-color-1 color-1 btn"}
        onClick={() => props.addOrUpdateEmployee(true)}
      >Save
      </button>
      <button
        className="bg-color-1 color-1 btn"
        onClick={() => props.addOrUpdateEmployee(false)}
      >Cancel
      </button>
    </>
  )
}

ButtonGroup.propTypes = {
  addOrUpdateEmployee: PropTypes.func
}

export default ButtonGroup