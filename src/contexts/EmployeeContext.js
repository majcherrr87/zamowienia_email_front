import {createContext, useEffect, useState} from 'react'

export const EmployeeContext = createContext()

export const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/contractors/all');
            const data = await res.json();
            setEmployees(data);
            console.log(data, 'userContext')
        })();
    }, []);


    return (
        <EmployeeContext.Provider value={{employees}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}