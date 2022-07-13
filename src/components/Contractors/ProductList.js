import React, {useContext} from 'react';
import {Form, OverlayTrigger, Tooltip} from "react-bootstrap";
import {OptionsProduct} from "../Orders/OptionsProduct";
import {OrderContext} from "../../contexts/OrderContext";


export const ProductList = ({product}) => {
    const {deleteProduct} = useContext(OrderContext);


    return (<>

            <td>{product.name_product}</td>
            <td>
                <Form.Control type="text" placeholder="Normal text"/>
            </td>
            <td>
                <Form.Select aria-label="Default select example">
                    <option>{product.choice_packaging}</option>
                    <OptionsProduct/>
                </Form.Select>
            </td>
            <td></td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edytuj
                        </Tooltip>
                    }>
                    <button className="btn text-warning btn-act " data-toggle="modal">
                        <i className="material-icons">&#xE254;</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Usuń
                        </Tooltip>
                    }>
                    <button onClick={() => deleteProduct(product.id_product)} className="btn text-danger btn-act "
                            data-toggle="modal">
                        <i className="material-icons">&#xE872;</i>
                    </button>
                </OverlayTrigger>


            </td>

        </>
    )


}