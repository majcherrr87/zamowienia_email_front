import React, {useContext} from 'react';
import './contractor.css';
import {EmployeeList} from "./EmployeeList";
import {EmployeeContext} from "../../contexts/EmployeeContext";


export const Contractors = () => {

    const {employees} = useContext(EmployeeContext);
    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                            <EmployeeList/>
                    </div>
                </div>
            </div>
        </>
    )
}