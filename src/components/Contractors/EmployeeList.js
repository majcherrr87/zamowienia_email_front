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

    if (employees === []) {
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
                    <h2>Dostawcy </h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i
                        className="material-icons">&#xE147;</i> <span>Dodaj nowego dostawce</span></Button>
                </div>
            </div>
        </div>

        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Adres</th>
                <th>Telefon</th>
                <th>Opcje</th>
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