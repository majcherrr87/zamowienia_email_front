import React, {useContext, useEffect, useState} from 'react';
import {OrderContext} from '../../contexts/OrderContext'
import {Button, Modal} from "react-bootstrap";
import {ProductList} from "../Contractors/ProductList";
import {AddFormProduct} from "./AddFormProduct";


export const Orders = (props) => {
    const {order, getProduct, refresh} = useContext(OrderContext);
    const [show, setShow] = useState(false);


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        getProduct(props.id);
        handleClose()
    }, [props.id, refresh])


    return (
        <>

            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Dostawca <b>{props.name}</b></h2>
                    </div>
                    <div className="col-sm-3 ">
                        <Button disabled className="btn btn-success m-0 align-items-center" data-toggle="modal"><i
                            className="material-icons">&#xE147;</i> <span>Wyślij</span></Button>
                    </div>
                    <div className="col-sm-3  ">
                        <Button onClick={handleShow} className="btn btn-success m-0 align-items-end"
                                data-toggle="modal"><i
                            className="material-icons">&#xE147;</i> <span>Dodaj nowy product</span></Button>
                    </div>

                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                    <th>Opakowanie</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>

                {order.map(product => (
                    <tr key={product.id_product}>
                        <ProductList product={product}/>
                    </tr>
                ))
                }


                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddFormProduct id_emplyee={props.id}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )


}