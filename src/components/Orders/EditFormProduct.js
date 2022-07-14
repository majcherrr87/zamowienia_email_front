import {Button, Form} from "react-bootstrap";
import {OrderContext} from "../../contexts/OrderContext";
import React, {useContext, useState} from 'react';
import {OptionsProduct} from "./OptionsProduct";


export const EditFormProduct = ({theProduct}) => {
    const {updateProduct, setRefresh, refresh} = useContext(OrderContext);
    const id_product = theProduct.id_product;
    const id_contractor = theProduct.id_contractor;
    const [name_product, setName_product] = useState(theProduct.name_product);
    const [choice_packaging, setChoice_packaging] = useState(theProduct.choice_packaging);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id_contractor, id_product, name_product, choice_packaging);
        setRefresh(!!refresh)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Name *'
                    name='name'
                    value={name_product}
                    onChange={(e) => setName_product(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Select
                    onChange={e => setChoice_packaging(e.target.value)}
                    aria-label="Default select example"
                    required>
                    <option>{choice_packaging}</option>
                    <OptionsProduct selected={choice_packaging}/>
                </Form.Select>
            </Form.Group>

            <Button variant='success' type='submit'>
                Edytuj produkt
            </Button>
        </Form>
    )
}