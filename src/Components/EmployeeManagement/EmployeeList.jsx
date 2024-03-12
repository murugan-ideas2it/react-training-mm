import PropTypes from 'prop-types';
import EmployeeInfo from './EmployeeInfo.jsx'
import '../../assets/css/employee.css'

const EmployeeList = (props) => {
  return (
    <ul className="ds-grid userList">
      {props.employeeDetails.map((employeeInfo, index) => (
        <li key={index} className={"userInfo bg-overlay-" + (index > 8 ? (index % 8) : (index + 1))}>
          <EmployeeInfo employeeInfo={employeeInfo} profileId={index} updateEmployeeDataAfterActionClick={props.updateEmployeeDataAfterActionClick} />
        </li>
      ))}
    </ul>
  )
}

EmployeeList.propTypes = {
  employeeDetails: PropTypes.arrayOf(PropTypes.object),
  updateEmployeeDataAfterActionClick: PropTypes.func
}
export default EmployeeList