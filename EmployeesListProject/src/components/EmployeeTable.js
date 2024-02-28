// EmployeeTable.js
import React from 'react';

const EmployeeTable = ({ employees, deleteEmployee, editEmployee }) => {
  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Mode of Contact</th>
            <th>Marital Status</th>
            <th>Immediate joiner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.middleName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.gender}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.modeOfContact.join(', ')}</td>
              <td>{employee.maritalStatus}</td>
              <td>{employee.immediateJoiner}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => editEmployee(employee)}><i class="fa-solid fa-pen-to-square"></i></button>
                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
