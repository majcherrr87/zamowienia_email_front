import {createContext, useState} from 'react'

export const OrderContext = createContext();

export const OrderContextProvider = (props) => {

    const [order, setOrder] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [send, setSend] = useState([])


    const getProduct = async (id) => {
        const res = await fetch(`https://majcher.networkmanager.pl/api/contractors/allProduct/${id}`);
        const data = await res.json();
        setOrder(data);

    }


    const handleSend = (list) => {

        if (send.some(w => w.id_product === list.id_product)) {
            setSend([...send].filter(x => x.id_product !== list.id_product))

            setSend([...send, list])

        } else {

            setSend([...send, list])

        }


    }


    const addOrder = async (newProduct) => {


        const res = await fetch(`https://majcher.networkmanager.pl/api/contractors/product`, {
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

        await fetch(`https://majcher.networkmanager.pl/api/contractors/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setRefresh(!refresh)
    };
    const updateProduct = async (id_contractor, id_product, name_product, choice_packaging) => {


        await fetch(`https://majcher.networkmanager.pl/api/contractors/product/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_contractor,
                id_product,
                name_product,
                choice_packaging,
            }),
        });

        setRefresh(!refresh)

    }


    return (
        <OrderContext.Provider value={{
            order,
            refresh,
            setRefresh,
            send,
            setSend,
            getProduct,
            addOrder,
            deleteProduct,
            updateProduct,
            handleSend
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}