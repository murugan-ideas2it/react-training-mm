import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import '../../assets/css/modelForm.css';
import ButtonGroup from "./ButtonGroup";


const ModalPopup = (props) => {console.log("props", props)
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [address, setAddress] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedRecordId, setSelectedRecordId] = useState(props.recordId);

  useEffect(() => { 
    console.log('renderingRecordDet-===ailskj ==='+selectedRecordId)
    if(props.modalType == 'view' || props.modalType =='edit'){
      const renderingRecordDetails = props.employeeDetails.filter(employeeDetail => employeeDetail.id == selectedRecordId);
        setName(renderingRecordDetails[0].name);
        setDesignation(renderingRecordDetails[0].designation);
        setAddress(renderingRecordDetails[0].address);
        console.log('renderingRecordDetails', renderingRecordDetails)
    } else if(props.modalType == 'add') {
      console.log('props=====', props)
      resetForm(false);
    }
     
  }, [])

  // let renderingRecordDetails = [];
  // if(props.modalType == 'view' || props.modalType =='edit'){
  //   const renderingRecordDetails = props.employeeDetails.filter(employeeDetail => employeeDetail.id == props.recordId);
  //   if (renderingRecordDetails.length == 1) {
  //     setName(renderingRecordDetails[0].name);
  //     setDesignation(renderingRecordDetails[0].designation);
  //     setAddress(renderingRecordDetails[0].address);
  //   }
  //   console.log("renderingRecord", renderingRecord);
  //   console.log('renderingRecordDetails', renderingRecordDetails)
  // } 

  const resetForm = (popupClose) => {
    setName('');
    setDesignation('');
    setAddress('');
    setErrorMessage('');
    if(popupClose){
      props.updateModelHideShowStatus(false);
      setSelectedRecordId(0);
    }
    
    console.log("isAddNewEmployee", selectedRecordId)
  };

  const addEmployee = isAddNewEmployee => {
    if(isAddNewEmployee){
      if(name && designation && address){
        /** Update edited record */
        if(selectedRecordId && (selectedRecordId !== 0)){
          console.log("props.recordId,", selectedRecordId+" --"+name+"============"+designation+"********"+address);
          const recordObject = props.employeeDetails.findIndex(record => record.id === selectedRecordId);
          if(recordObject > -1){
            props.employeeDetails[recordObject].name = name;
            props.employeeDetails[recordObject].designation = designation;
            props.employeeDetails[recordObject].address = address;
          }
          
          console.log("props.employeeDetails before update", props.employeeDetails);
          props.updateEmployeeDetailList(props.employeeDetails);
          console.log("props.employeeDetails after update", props.employeeDetails);
          resetForm(true);
        } else {
          props.updateEmployeeDetailList([
            { id: (props.employeeDetails.length + 1), 
              name, designation,
              address 
            },
            ...props.employeeDetails
          ])
      }
        resetForm(true);
      } else {
        if(!name){
          setErrorMessage("Please enter the name")
        } else if(!designation) {
          setErrorMessage("Please enter the designation")
        } else if(!address) {
          setErrorMessage("Please enter the address")
        }
      }
      
    } else {
      resetForm(true);
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
            {/* <form> */}
              <div className="fieldGroup ds-flex">
                <label className="fieldLabel">Name</label>
                <input type="text" value={name} placeholder="Enter Name " onChange={e => setName(e.target.value)} />
              </div>
              <div className="fieldGroup ds-flex">
                <label className="fieldLabel">Designation</label>
                <input type="text" value={designation} placeholder="Enter Designation " onChange={e => setDesignation(e.target.value)} />
              </div>
              <div className="fieldGroup ds-flex">
                <label className="fieldLabel">Address</label>
                <input type="text" value={address} placeholder="Enter Address " onChange={e => setAddress(e.target.value)} />
              </div>
              { props.modalType != 'view' &&
                <div className="fieldGroup">
                  <ButtonGroup addEmployee={addEmployee} />
                </div>
              }
            {/* </form> */}
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
  modalTitle: PropTypes.string
}

export default ModalPopup