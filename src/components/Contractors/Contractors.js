import React from 'react';
import './contractor.css';
import {EmployeeList} from "./EmployeeList";


export const Contractors = () => {


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