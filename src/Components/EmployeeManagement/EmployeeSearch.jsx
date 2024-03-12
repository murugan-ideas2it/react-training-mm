import PropTypes from 'prop-types';

const EmployeeSearch = (props) => {
  return (
    <>
      <input
        type="text"
        className="inputField float-left"
        placeholder="Search Employee"
        value={props.searchEmployee}
        onChange={e => props.updateSearchedKey(e.target.value || '')}
      />
    </>
  )
}

EmployeeSearch.propTypes = {
  searchEmployee: PropTypes.string,
  updateSearchedKey: PropTypes.func
};

export default EmployeeSearch