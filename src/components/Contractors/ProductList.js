import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal, OverlayTrigger, Tooltip,} from "react-bootstrap";
import {OptionsProduct} from "../Orders/OptionsProduct";
import {OrderContext} from "../../contexts/OrderContext";
import {EditFormProduct} from "../Orders/EditFormProduct";


export const ProductList = ({product, employee}) => {
    const {deleteProduct, setRefresh, refresh, handleSend} = useContext(OrderContext);
    const [show, setShow] = useState(false);
    const [send, setSend] = useState({});
    const [sendBtn, setSendBtn] = useState('primary');
    const [disabledInput, setDisabledInput] = useState();


    const sendProduct = (name, value, id_product) => {

        setSend({
            ...send,
            'nazwa': product.name_product,
            'id_product': id_product,
            'opakowanie': product.choice_packaging,
            [name]: value
        });

    }
    const handleSendAndChangeBtn = (send) => {
        handleSend(send)
        setSendBtn('success')
        setDisabledInput('disabled')
    }


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [refresh])


    return (<>

            <td><b>{product.name_product}</b></td>
            <td>
                <Form.Control
                    type="text"
                    placeholder="podaj ilość"
                    onChange={e => sendProduct('ilosc', e.target.value, product.id_product)}
                />
            </td>
            <td>
                <Form.Select
                    aria-label="Default select example"
                    onChange={e => sendProduct('opakowanie', e.target.value, product.id_product)}
                >
                    <option>{product.choice_packaging}</option>
                    <OptionsProduct/>
                </Form.Select>
            </td>
            <td></td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            dodaj
                        </Tooltip>
                    }>

                    <Button onClick={() => handleSendAndChangeBtn(send)} variant={sendBtn}>
                        Dodaj do listy
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edytuj
                        </Tooltip>
                    }>
                    <button onClick={handleShow} className="btn text-warning btn-act " data-toggle="modal">
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edycja produktu
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditFormProduct theProduct={product}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )


}