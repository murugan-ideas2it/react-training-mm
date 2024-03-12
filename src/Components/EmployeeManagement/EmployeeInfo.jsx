import PropTypes from 'prop-types';
import ActionLink from './ActionLink.jsx';
import avatar from '../../assets/images/avatar.png';
import chatIcon from '../../assets/images/chatIcon.png'
import viewIcon from '../../assets/images/viewIcon.jpg';
import deleteIcon from '../../assets/images/deleteIcon.png';
import editIcon from '../../assets/images/editIcon.jpg';

const EmployeeInfo = (props) => {

  return (
    <>
      <div className="userInfoBox">
        <ActionLink 
          actionType={"view"} 
          linkClassName={"viewLink noButton"}
          linkTitle={"View"}
          imageLink={viewIcon}
          recordId={props.employeeInfo.id}
          updateEmployeeDataAfterActionClick={props.updateEmployeeDataAfterActionClick} 
        />
        <ActionLink 
          actionType={"edit"}
          linkClassName={"editLink noButton"}
          linkTitle={"Edit"}
          imageLink={editIcon}
          recordId={props.employeeInfo.id}
          updateEmployeeDataAfterActionClick={props.updateEmployeeDataAfterActionClick} 
        />
        <ActionLink
          actionType={"delete"}
          linkClassName={"deleteLink noButton"}
          linkTitle={"Delete"}
          imageLink={deleteIcon}
          recordId={props.employeeInfo.id}
          updateEmployeeDataAfterActionClick={props.updateEmployeeDataAfterActionClick} 
        />
        <div className="profile-img">
          <img src={avatar} alt={props.employeeInfo.name} className="avatar-img" />
        </div>
        <p className="margin-10-auto color-5 txt-20 fw-500">{props.employeeInfo.name}</p>
        <p className="color-4 margin-5-auto">{props.employeeInfo.designation}</p>
        <p className="color-4 margin-5-auto">{props.employeeInfo.address}</p>
        <div className="socialLinks">
          <a href="#" className="socialButton ds-inline-flex color-5 txt-14"><i>addFollow</i></a>
          <a href="#" className="socialIconLink ds-inline-flex"><img src={chatIcon} /></a>
        </div>
      </div>
    </>
  )
}

EmployeeInfo.propTypes = {
  employeeInfo: PropTypes.shape({
    name: PropTypes.string,
    designation: PropTypes.string,
    address: PropTypes.string,
    profileId: PropTypes.number,
    key: PropTypes.number,
    updateEmployeeDataAfterActionClick: PropTypes.func,
    id: PropTypes.number
  })
};

export default EmployeeInfo