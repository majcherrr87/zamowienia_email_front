import {createContext, useEffect, useState} from 'react'

export const OrderContext = createContext();

export const OrderContextProvider = (props) => {

    const [order, setOrder] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/contractors/all');
            const data = await res.json();
            setOrder(data);
        })();
        console.log('odświerzanie', refresh)
    }, [refresh]);
    //
    // const addEmployee = async (name, email, address, phone) => {
    //     const res = await fetch(`http://localhost:3001/contractors/`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name_contractor: name,
    //             email_contractor: email,
    //             address_contractor: address,
    //             phone_contractor: phone,
    //         }),
    //     });
    //     const data = await res.json();
    //     console.log(data)
    //     setRefresh(!refresh)
    // };
    // const deleteEmployee = async (id) => {
    //     console.log('delete', id) ;
    //     await fetch(`http://localhost:3001/contractors/one/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });
    //     setRefresh(!refresh)
    // };
    // const updateEmployee = async (id, updatedEmployee) => {
    //     await fetch(`http://localhost:3001/contractors/one/`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             id_contractor: updatedEmployee.id,
    //             name_contractor: updatedEmployee.name,
    //             email_contractor: updatedEmployee.email,
    //             address_contractor: updatedEmployee.address,
    //             phone_contractor: updatedEmployee.phone,
    //         }),
    //     });
    //
    //     setRefresh(!refresh)
    //
    // }


    return (
        <OrderContext.Provider value={{order}}>
            {props.children}
        </OrderContext.Provider>
    )
}