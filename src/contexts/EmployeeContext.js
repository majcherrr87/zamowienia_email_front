import {createContext, useEffect, useState} from 'react'

export const EmployeeContext = createContext();

export const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/contractors/all');
            const data = await res.json();
            setEmployees(data);
        })();
    }, []);

    const addEmployee = async (name, email, address, phone) => {
        console.log('Gotowe do wysłania ', name, email, address, phone);

        const res = await fetch(`http://localhost:3001/contractors/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name_contractor: name,
                email_contractor: email,
                address_contractor: address,
                phone_contractor: phone,
            }),
        });
        const data = await res.json();
        console.log(data);
    };


    return (
        <EmployeeContext.Provider value={{employees, addEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}