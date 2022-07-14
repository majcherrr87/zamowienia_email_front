import {Button, Form} from "react-bootstrap";
import {OrderContext} from "../../contexts/OrderContext";
import React, {useContext, useState} from 'react';
import {OptionsProduct} from "./OptionsProduct";


export const AddFormProduct = (props) => {
    const {addOrder, setRefresh, refresh} = useContext(OrderContext);
    const [newProduct, setNewProduct] = useState({});
    const setProduct = (name, value) => {
        setNewProduct({
            ...newProduct,
            id_contractor: props.id_contractor,
            [name]: value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        addOrder(newProduct);
        setRefresh(!!refresh)
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Nazwa *'
                    onChange={e => setProduct('name_product', e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Select
                    onChange={e => setProduct('choice_packaging', e.target.value)}
                    aria-label="Default select example"
                    required>
                    <option value=''>Wybierz opakowanie</option>
                    <OptionsProduct/>
                </Form.Select>
            </Form.Group>


            <Button variant='success' type='submit'>
                Dodaj nowy produkt
            </Button>
        </Form>
    )
}