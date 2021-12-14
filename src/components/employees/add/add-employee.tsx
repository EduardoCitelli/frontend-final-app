import './add-employee.css'

import { FormApi } from "final-form";
import { Form } from 'react-final-form'
import { Employee, EmployeeArea } from "../../../models/Employee";
import { Button } from '@mui/material';
import TextInput from '../../shared/text-input/textInput';

interface Props {
    addEmployee: (value: Employee) => void;
    updateEmployee?: Employee;
    cb?: () => void;
}

const defaultEmployee: Employee = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    area: EmployeeArea.RRHH,
}

function EmployeeForm(props: Props) {
    const onSubmitEmployee = (values: Employee, form: FormApi<Employee, Employee>) => {
        props.addEmployee(values);

        form.reset();

        if (props.cb)
            props.cb();
    }

    return (
        <Form
            onSubmit={onSubmitEmployee}
            initialValues={props.updateEmployee ? props.updateEmployee : defaultEmployee}

            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form
                    className="employee-form"
                    onSubmit={handleSubmit}>
                    <TextInput
                        name="name"
                        placeHolder="Name"
                        type="text"
                        required={true} />
                    <TextInput
                        name="surname"
                        placeHolder="Surname"
                        type="text"
                        required={true} />
                    <TextInput
                        name="phone"
                        placeHolder="Phone"
                        type="tel"
                        required={false} />
                    <TextInput
                        name="email"
                        placeHolder="Email"
                        type="email"
                        required={true}
                    />
                    <div>
                        <Button
                            disabled={submitting || pristine}
                            type="submit"
                        >Submit</Button>
                        <Button
                            disabled={submitting || pristine}
                            onClick={() => form.reset()}
                            type="button"
                        >Reset</Button>
                    </div>
                </form>
            )}
        />
    );
}

export default EmployeeForm;