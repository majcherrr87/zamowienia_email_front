import {Button, Form} from "react-bootstrap";
import {EmployeeContext} from "../../contexts/EmployeeContext";
import {useContext, useState} from 'react';


export const EditFormContractor = ({theEmployee}) => {
    const {updateEmployee} = useContext(EmployeeContext);
    const id = theEmployee.id_contractor;
    const [name, setName] = useState(theEmployee.name_contractor);
    const [email, setEmail] = useState(theEmployee.email_contractor);
    const [address, setAddress] = useState(theEmployee.address_contractor);
    const [phone, setPhone] = useState(theEmployee.phone_contractor);

    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Name *'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='email'
                    placeholder='Email *'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as='textarea'
                    placeholder='Address'
                    name='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='number'
                    placeholder='Phone'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant='success' type='submit'>
                Edit Employee
            </Button>
        </Form>
    )
}