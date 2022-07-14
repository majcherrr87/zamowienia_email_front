import React, {useEffect, useState} from 'react';


export const SendEmail = () => {
    const [listOfProduct, setListOfProduct] = useState([]);
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        setListOfProduct(JSON.parse(localStorage.getItem('listOfProduct')))
        setEmployee(JSON.parse(localStorage.getItem('employee')))

    }, [])

    console.log(employee)


    return (
        <>
            <h1>Lista produktów od {employee.name}</h1>
            <h2>którą można wysłać na adres {employee.email}</h2>
            <hr/>
            <ul>
                {listOfProduct.map(product => (
                    <h3 key={product.id_product}>{product.nazwa} {product.ilosc} {product.opakowanie}</h3>
                ))}
            </ul>


        </>
    );


}