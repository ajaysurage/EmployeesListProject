
import React, { useState, useEffect } from 'react';
const EmployeeForm = ({ addEmployee, editEmployee }) => {
  const initialEmployeeState = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    modeOfContact: [],
    maritalStatus: '',
    immediateJoiner: ''
  };

  const [employee, setEmployee] = useState(initialEmployeeState);

  useEffect(() => {
    if (editEmployee) {
      setEmployee(editEmployee);
    } else {
      setEmployee(initialEmployeeState);
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedModesOfContact;
    if (checked) {
      updatedModesOfContact = [...employee.modeOfContact, value];
    } else {
      updatedModesOfContact = employee.modeOfContact.filter(mode => mode !== value);
    }
    setEmployee(prevState => ({
      ...prevState,
      modeOfContact: updatedModesOfContact
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee(initialEmployeeState);
  };

  const resetForm = () => {
    setEmployee(initialEmployeeState);
  };

  return (
    <div className="d-flex justify-content-center" style={{ backgroundColor: 'whitesmoke' }}>
      <div style={{ width: '50%' }}>
        <h2 className="text-center my-3">Employee Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input type="text" className="form-control" name="firstName" value={employee.firstName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Middle Name:</label>
            <input type="text" className="form-control" name="middleName" value={employee.middleName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input type="text" className="form-control" name="lastName" value={employee.lastName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender:</label>
            <div>
              <label className="form-check-label">
                <input type="radio" className="form-check-input mx-2" name="gender" value="male" checked={employee.gender === 'male'} onChange={handleChange} />
                Male
              </label>
              <label className="form-check-label">
                <input type="radio" className="form-check-input mx-2" name="gender" value="female" checked={employee.gender === 'female'} onChange={handleChange} />
                Female
              </label>
              <label className="form-check-label">
                <input type="radio" className="form-check-input mx-2" name="gender" value="others" checked={employee.gender === 'others'} onChange={handleChange} />
                Others
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input type="number" className="form-control" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mode of Contact:</label>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" name="modeOfContact" value="email" checked={employee.modeOfContact.includes('email')} onChange={handleCheckboxChange} />
                Email
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" name="modeOfContact" value="phone" checked={employee.modeOfContact.includes('phone')} onChange={handleCheckboxChange} />
                Phone
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Marital Status:</label>
            <select className="form-select" name="maritalStatus" value={employee.maritalStatus} onChange={handleChange}>
              <option >Select status</option>
              <option value="married">Married</option>
              <option value="single">Single</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Immediate joiner:</label>
            <div>
              <label className="form-check-label">
                <input type="radio" className="form-check-input mx-2" name="immediateJoiner" value="Yes" checked={employee.immediateJoiner === 'Yes'} onChange={handleChange} />
                Yes
              </label>
              <label className="form-check-label">
                <input type="radio" className="form-check-input mx-2" name="immediateJoiner" value="No" checked={employee.immediateJoiner === 'No'} onChange={handleChange} />
                No
              </label>
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">{editEmployee ? 'Update' : 'Submit'}</button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>Clear</button>
            <hr className='border border-solid border-2 border-success'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
