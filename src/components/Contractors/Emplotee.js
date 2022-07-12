import React, {useContext, useEffect, useState} from 'react';
import {EmployeeContext} from '../../contexts/EmployeeContext';
import {Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import {EditFormContractor} from "./EditFormContractor";

export const Employee = ({employee}) => {
    const {deleteEmployee} = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [employee]);

    return (<>
            <td>{employee.name_contractor}</td>
            <td>{employee.email_contractor}</td>
            <td>{employee.address_contractor}</td>
            <td>{employee.phone_contractor}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edytuj
                        </Tooltip>
                    }>
                    <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal">
                        <i className="material-icons">&#xE254;</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Usuń
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id_contractor)} className="btn text-danger btn-act"
                            data-toggle="modal">
                        <i className="material-icons">&#xE872;</i>
                    </button>
                </OverlayTrigger>


            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditFormContractor theEmployee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )


}