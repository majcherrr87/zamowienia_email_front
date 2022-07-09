import React from 'react';
import {EmployeeContextProvider} from "../../contexts/EmployeeContext";
import './contractor.css';
import {EmployeeList} from "./EmployeeList";


export const Contractors = () => {


    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <EmployeeContextProvider>
                            <EmployeeList/>
                        </EmployeeContextProvider>
                    </div>
                </div>
            </div>
        </>
    )
}