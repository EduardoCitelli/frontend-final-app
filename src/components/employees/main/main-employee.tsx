import './main-employee.css';

import { connect } from 'react-redux';
import { bindActionCreators as actionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Employee } from "../../../models/Employee";
import { AppActions } from "../../../redux/actions/models/actions";
import { deleteEmployee, getEmployees, saveEmployee } from "../../../redux/actions/employee-actions";
import { AppState } from "../../../redux/configure-store";
import { useEffect } from 'react';
import HeaderEmployee from '../header/header-employee';
import ListEmployees from '../list/list-employees';
import SimpleModal from '../../shared/modal/modal';
import Spinner from '../../shared/spinner/spinner';
import EmployeeForm from '../add/add-employee';

interface StateProps {
    employees: Employee[];
    loading: boolean;
}

interface DispatchProps {
    requestEmployees: () => void;
    saveEmployees: (employee: Employee) => void;
    deleteEmployees: (id: string) => void;
}

type LinkProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
    employees: state.employeeReducer.employees,
    loading: state.apiStatusReducer.loading,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, AppActions>) => ({
    requestEmployees: actionCreators(getEmployees, dispatch),
    saveEmployees: actionCreators(saveEmployee, dispatch),
    deleteEmployees: actionCreators(deleteEmployee, dispatch),
});

function MainEmployee(props: LinkProps) {
    useEffect(() => {
        props.requestEmployees();
    }, []);

    return (
        <>
            <HeaderEmployee />

            {
                props.loading ? (<Spinner />) : (
                    <>
                        <SimpleModal
                            buttonColor="primary"
                            text="Create Employee ➕"
                            title="New Employee"
                            children={<EmployeeForm addEmployee={props.saveEmployees} />}
                        />
                        <ListEmployees
                            employees={props.employees}
                            deleteEmployee={props.deleteEmployees}
                            updateEmployee={props.saveEmployees}
                        />
                    </>
                )
            }
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainEmployee);