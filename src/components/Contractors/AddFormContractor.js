import {Button, Form} from "react-bootstrap";

export const AddFormContractor = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Name *'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='email'
                    placeholder='Email *'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as='textarea'
                    placeholder='Address'
                    rows={3}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='number'
                    placeholder='Phone'
                />
            </Form.Group>
            <Button variant='success' type='submit' block>
                Add new Employee
            </Button>
        </Form>
    )
}