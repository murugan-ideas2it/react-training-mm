import PropTypes from 'prop-types';
import ActionLink from './ActionLink';


const AddEmployee = (props) => {

  return (
    <>
      <ActionLink 
        actionType={"add"}
        linkClassName={"float-right bg-color-1 color-1 btn"}
        linkTitle={"+ Add Employee"}
        recordId={0}
        updateEmployeeDataAfterActionClick={props.updateEmployeeDataAfterActionClick} 
      /> 
      {/* <button className="float-right bg-color-1 color-1 btn" onClick={() => props.updateModelHideShowStatus(true)}>+ Add Employee</button> */}
    </>
  )
}

AddEmployee.propTypes = {
  updateModelHideShowStatus: PropTypes.func,
  updateEmployeeDataAfterActionClick: PropTypes.func
}

export default AddEmployee