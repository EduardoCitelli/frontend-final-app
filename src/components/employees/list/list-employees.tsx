import './list-employees.css';
import { Employee, EmployeeArea } from '../../../models/Employee';
import SimpleModal from '../../shared/modal/modal';
import DeleteEmployee from '../delete/delete-employee';
import EmployeeForm from '../add/add-employee';

interface Props {
    employees: Employee[],
    deleteEmployee: (id: string) => void;
    updateEmployee: (employee: Employee) => void;
}

function ListEmployees(props: Props) {
    return (
        <div className='grid'>
            {
                props.employees.map(employee => (
                    <div key={employee.id} className='card'>
                        <h2>{employee.name} - {employee.surname}</h2>
                        <p>Email: {employee.email}</p>
                        <p>Phone: {employee.phone}</p>
                        <p>Area: {EmployeeArea[employee.area]}</p>
                        <hr />

                        <div className="button-panel">
                            <SimpleModal
                                buttonColor="primary"
                                text="Edit ✍"
                                title="Edit Employee"
                                children={
                                    <EmployeeForm
                                        addEmployee={props.updateEmployee}
                                        updateEmployee={employee} />
                                }
                            />
                            <SimpleModal
                                buttonColor="error"
                                text="Delete 🗑"
                                title="Are you sure you want to delete this item? 🚧"
                                children={
                                    <DeleteEmployee
                                        deleteOnClickHandler={props.deleteEmployee}
                                        idEmployee={employee.id as string} />
                                }
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListEmployees;