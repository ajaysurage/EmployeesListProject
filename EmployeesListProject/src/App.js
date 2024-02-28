
import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  const addEmployee = (employee) => {
    if (editEmployee) {
      const updatedEmployees = employees.map(emp => {
        if (emp.id === editEmployee.id) {
          return { ...employee, id: emp.id };
        }
        return emp;
      });
      setEmployees(updatedEmployees);
      setEditEmployee(null);
    } else {
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  const editEmployeeDetails = (employee) => {
    setEditEmployee(employee);
  };

  

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} editEmployee={editEmployee}  />
      <EmployeeTable employees={employees} deleteEmployee={deleteEmployee} editEmployee={editEmployeeDetails} />
    </div>
  );
}

export default App;
