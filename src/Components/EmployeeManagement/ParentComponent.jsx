import { useState, useEffect } from "react";
import EmployeeSearch from "./EmployeeSearch.jsx"
import AddEmployeeButton from "./AddEmployeeButton.jsx"
import ModalPopup from "./ModalPopup.jsx"
import EmployeeList from "./EmployeeList.jsx"
import '../../assets/css/employeeManagement.css'
import '../../assets/css/form.css';

function EmployeeManagementParentComponent() {
  const [employeeDetails, setEmployeeDetails] = useState([{
    id: 1,
    name: "Rajan Babu",
    designation: "Senior Technical Analyst",
    address: "Thindivanam",
    dob: "12/11/1993"
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Full Stack Developer",
    address: "Thiruvannamalai",
    dob: "01/06/1992"
  },
  {
    id: 3,
    name: "Karthick",
    designation: "Software Engineer",
    address: "Thirupporur",
    dob: "01/06/1992"
  },
  {
    id: 4,
    name: "Ramanathan",
    designation: "Senior Software Engineer",
    address: "Tuticorin",
    dob: "01/06/1992"
  },
  ]);
  const [searchEmployee, setSearchEmployee] = useState('');
  const [dataToShow, updateEmployeeData] = useState([]);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [selectedRecordId, setSelectedRecordId] = useState(0);
  const [modalType, setModalType] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  /* Whenever the search input value will got changes, this useEffect will trigger */
  useEffect(() => {
    if (searchEmployee) {
      const searchedEmployeeResult = employeeDetails.filter(employeeDetails => employeeDetails.name.toLowerCase().indexOf(searchEmployee.toLowerCase()) !== -1)
      updateEmployeeData(searchEmployee ? (searchedEmployeeResult || []) : [...employeeDetails]);
    } else {
      updateEmployeeData([...employeeDetails])
    }
  }, [searchEmployee]);

  useEffect(() => {
    updateEmployeeData([...employeeDetails]);
  }, []);

  const updateSearchedKey = (searchedKey) => {
    setSearchEmployee(searchedKey)
  }

  const updateModelHideShowStatus = (status) => {
    setShowAddEmployeeModal(status)
  }
  const Capitalize = (capitalizeNeedeData) => {
    return capitalizeNeedeData[0].toUpperCase() + capitalizeNeedeData.slice(1);
  }
  const updateEmployeeDataAfterActionClick = (actionDetails) => {
    let updatedEmployeeDetails = []

    if (actionDetails.action == "delete") {
      updatedEmployeeDetails = employeeDetails.filter(employeeDetail => employeeDetail.id !== actionDetails.recordId);
      updateEmployeeData(updatedEmployeeDetails);
      setEmployeeDetails(updatedEmployeeDetails);
    } else if (actionDetails.action == "view" || actionDetails.action == "edit" || actionDetails.action == "add") {
      setShowAddEmployeeModal(true)
      actionDetails.action == "add" ? setSelectedRecordId(0) : setSelectedRecordId(actionDetails.recordId)
      setModalType(actionDetails.action)
      setModalTitle(Capitalize(actionDetails.action) + ' Employee Details')
    }
  }

  return (
    <>
      {showAddEmployeeModal &&
        <ModalPopup
          modalTitle={modalTitle}
          modalType={modalType}
          recordId={selectedRecordId}
          updateModelHideShowStatus={updateModelHideShowStatus}
          showAddEmployeeModal={showAddEmployeeModal}
          employeeDetails={employeeDetails}
          updateEmployeeDetailList={(employeeData) => {
            setEmployeeDetails(employeeData);
            updateEmployeeData(employeeData);
          }}
        />}
      <div className="actions-sec">
        <EmployeeSearch searchEmployee={searchEmployee} updateSearchedKey={updateSearchedKey} />
        <AddEmployeeButton updateModelHideShowStatus={updateModelHideShowStatus} updateEmployeeDataAfterActionClick={updateEmployeeDataAfterActionClick} />
      </div>
      <div className="content-sec">
        {(dataToShow.length > 0) ? <EmployeeList employeeDetails={dataToShow} updateEmployeeDataAfterActionClick={updateEmployeeDataAfterActionClick} /> : <p className="txt-24">No data found</p>}
      </div>

    </>
  );
}

export default EmployeeManagementParentComponent