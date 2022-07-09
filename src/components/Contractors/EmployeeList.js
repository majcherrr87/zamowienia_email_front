import React, {useContext, useEffect, useState} from 'react';
import {EmployeeContext} from '../../contexts/EmployeeContext';
import {Employee} from "./Emplotee";
import {Button, Modal, Spinner} from "react-bootstrap";
import {AddFormContractor} from "./AddFormContractor";

export const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [employees]);

    if (employees === null) {
        return <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        </div>
    }


    return <>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i
                        className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                </div>
            </div>
        </div>
        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>

            {employees.map(employee => (
                <tr key={employee.id_contractor}>
                    <Employee employee={employee}/>
                </tr>
            ))
            }


            </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddFormContractor/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close Button
                </Button>
            </Modal.Footer>
        </Modal>

    </>

}