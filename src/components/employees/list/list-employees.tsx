import './list-employees.css';
import { Employee } from '../../../models/Employee';
import SimpleModal from '../../shared/modal/modal';
import DeleteEmployee from '../delete/delete-employee';

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
                        <h3>{employee.name} - {employee.surname}</h3>
                        <p>Email: {employee.email}</p>
                        <p>Phone: {employee.phone}</p>
                        <p>Area: {employee.area}</p>
                        <hr />

                        <div className="button-panel">
                            {/* <SimpleModal
                            buttonColor="primary"
                            text="Edit ✍"
                            title="Edit Employee"
                            children={undefined}
                            // children={
                            //     <UserForm
                            //         addUser={props.updateEmployee}
                            //         updaterUser={employee} />
                            // }
                        /> */}
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