import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import '../../assets/css/modelForm.css';
import ButtonGroup from "./ButtonGroup";
import {AddEmployee, EditEmployee} from "../../Services/EmployeeService.js";


const ModalPopup = (props) => {
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [address, setAddress] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  /* view, edit and delete purpose selected record Id will store this state */
  const [selectedRecordId, setSelectedRecordId] = useState(props.recordId);


  /* Whenever the user click the edit or view link this useEffect will trigger and fetch and set the modal form data */
  useEffect(() => {
    if (props.modalType == 'view' || props.modalType == 'edit') {
      const renderingRecordDetails = props.employeeDetails.filter(employeeDetail => employeeDetail.id == selectedRecordId);
      setName(renderingRecordDetails[0].name);
      setDesignation(renderingRecordDetails[0].designation);
      setAddress(renderingRecordDetails[0].address);
    } else if (props.modalType == 'add') {
      resetForm(false);
    }

  }, [])

  /* Reset popup form data */
  const resetForm = (isPopupClose) => {
    setName('');
    setDesignation('');
    setAddress('');
    setErrorMessage('');
    /* when the isPopupClose value is true this condition will get work and close the modal*/
    if (isPopupClose) {
      props.updateModelHideShowStatus(false);
      setSelectedRecordId(0);
    }

  };

  const updateRecord = (recordData, methodType) => {

    props.setShowLoading(true);
    props.setShowAPIError(false)
    /* Add Employee Details */
    if (methodType == 'add') {
      AddEmployee(recordData, (error, result) => {
        if (error) {
          props.setShowAPIError(true)
          console.log("error", error);
          props.setShowLoading(false);
        } else if (result) {
          result.data.id = parseInt(result.data.id);
          props.updateEmployeeDetailList([
            result.data,
            ...props.employeeDetails
          ])
          props.setShowLoading(false);

        }
      })
/* Edit Employee details */
    } else if (methodType == 'edit') {
      EditEmployee(recordData, (error, result) => {
        if (error) {
          props.setShowAPIError(true)
          console.log("error", error);
          props.setShowLoading(false);
        } else if (result) {

          result.data.id = recordData.id;
          if (recordData.id > -1) {
            const recordObject = props.employeeDetails.findIndex(record => record.id === recordData.id);
            props.employeeDetails[recordObject].id = recordData.id;
            props.employeeDetails[recordObject].name = recordData.name;
            props.employeeDetails[recordObject].designation = recordData.designation;
            props.employeeDetails[recordObject].address = recordData.address;
          }
          props.updateEmployeeDetailList(props.employeeDetails);
          props.setShowLoading(false);
        }
      });
    }

  }
  const addOrUpdateEmployee = (event) => {
    event.preventDefault();
    /* Add or Edit popup to save data  */
    const employeeName = event.target.name.value;
    const employeeDesignation = event.target.designation.value;
    const employeeAddress = event.target.address.value;
    if (name && designation && address) {
      /** Update edited record */
      if (selectedRecordId && (selectedRecordId !== 0)) {
        updateRecord({ id: selectedRecordId, name: employeeName, designation: employeeDesignation, address: employeeAddress }, 'edit')
        resetForm(true);
      } else {
        /* Add new record */
        updateRecord({ name, designation, address }, 'add')
      }
      resetForm(true);
    } else {
      /* Validation for the form */
      if (!name) {
        setErrorMessage("Please enter the name")
      } else if (!designation) {
        setErrorMessage("Please enter the designation")
      } else if (!address) {
        setErrorMessage("Please enter the address")
      }
    }

  }

  return (
    <>
      <div className={"modalPopup " + (props.showAddEmployeeModal ? "show" : "hide")}>
        <div className="modalContent">
          <div className="modal-header">
            <span className="closePopup" onClick={() => resetForm(true)}>&times;</span>
            <h3>{props.modalTitle}</h3>
          </div>
          <div className="modal-body">
            <p className="error red-txt txt-14">{errorMessage}</p>
            <form onSubmit={addOrUpdateEmployee}>
              <div className="fieldGroup ds-flex">
                <label className="fieldLabel">Name</label>
                <input type="text" name="name" value={name} placeholder="Enter Name" onChange={e => setName(e.target.value)} />
              </div>
              <div className="fieldGroup ds-flex">
                <label className="fieldLabel">Designation</label>
                <input type="text" name="designation" value={designation} placeholder="Enter Designation" onChange={e => setDesignation(e.target.value)} />
              </div>
              <div className="fieldGroup ds-flex">
                <label className="fieldLabel">Address</label>
                <input type="text" name="address" value={address} placeholder="Enter Address" onChange={e => setAddress(e.target.value)} />
              </div>
              {props.modalType != 'view' &&
                <div className="fieldGroup">
                  <ButtonGroup resetForm={resetForm} />
                </div>
              }
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

ModalPopup.propTypes = {
  modalType: PropTypes.string,
  recordId: PropTypes.number,
  updateModelHideShowStatus: PropTypes.func,
  updateEmployeeDetailList: PropTypes.func,
  employeeDetails: PropTypes.array,
  showAddEmployeeModal: PropTypes.bool,
  modalTitle: PropTypes.string,
  setShowLoading: PropTypes.func,
  setShowAPIError: PropTypes.func
}

export default ModalPopup