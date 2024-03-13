import PropTypes from 'prop-types';
import '../../assets/css/ButtonGroup.css';

const ButtonGroup = (props) => {
  return (
    <>
      <button
        className={"bg-color-1 color-1 btn"}
        type="submit"
      >Save
      </button>
      <button type='button'
        className="bg-color-1 color-1 btn"
        onClick={() => props.resetForm(true)}
      >Cancel
      </button>
    </>
  )
}

ButtonGroup.propTypes = {
  addOrUpdateEmployee: PropTypes.func,
  resetForm: PropTypes.func
}

export default ButtonGroup