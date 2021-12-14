import './delete-employee.css';
import { Button } from "@mui/material";

interface Props {
    idEmployee: string;
    deleteOnClickHandler: (id: string) => void;
    cb?: () => void;
}

export default function DeleteEmployee(props: Props) {
    function closeOnClickHandler() {
        if (props.cb)
            props.cb();
    }

    return (
        <div className="button-delete-panel">
            <Button className="button-delete" variant="contained" color="error" onClick={() => props.deleteOnClickHandler(props.idEmployee)}>Yes</Button>
            <Button className="button-delete" variant="contained" color="primary" onClick={closeOnClickHandler}>No</Button>
        </div>
    )
}