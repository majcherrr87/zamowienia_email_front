import React from 'react';

export const Employee = ({employee}) => {
    return (<>
            <td>{employee.name_contractor}</td>
            <td>{employee.email_contractor}</td>
            <td>{employee.address_contractor}</td>
            <td>{employee.phone_contractor}</td>
            <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons"
                                                                                     data-toggle="tooltip"
                                                                                     title="Edytuj">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons"
                                                                                         data-toggle="tooltip"
                                                                                         title="Usuń">&#xE872;</i></a>
            </td>
        </>
    )


}