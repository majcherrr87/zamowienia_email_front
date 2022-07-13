import {createContext, useState} from 'react'

export const OrderContext = createContext();

export const OrderContextProvider = (props) => {

    const [order, setOrder] = useState([]);
    const [refresh, setRefresh] = useState(false);


    const getProduct = async (id) => {
        const res = await fetch(`http://localhost:3001/contractors/allProduct/${id}`);
        const data = await res.json();
        setOrder(data);

    }

    const addOrder = async (newProduct) => {


        const res = await fetch(`http://localhost:3001/contractors/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name_product: newProduct.name_product,
                choice_packaging: newProduct.choice_packaging,
                id_contractor: newProduct.id_contractor,
            }),
        });
        const data = await res.json();

        setRefresh(!refresh);
    };
    const deleteProduct = async (id) => {

        await fetch(`http://localhost:3001/contractors/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setRefresh(!refresh)
    };
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
        <OrderContext.Provider value={{order, refresh, setRefresh, getProduct, addOrder, deleteProduct}}>
            {props.children}
        </OrderContext.Provider>
    )
}