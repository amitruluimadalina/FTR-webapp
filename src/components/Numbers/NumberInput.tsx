import React from "react";
import { Form, Button } from "react-bootstrap";
import { NumberProps } from "../../types";

const NumberInput: React.FC<NumberProps> = ({ onSubmit, firstElement, FIB }) => {
    const text = firstElement === 0 ? 'Please enter the first number' : 'Please enter the next number';
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="numberInput">{text}</Form.Label>
                <Form.Control id="numberInput" placeholder="Number" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ maxWidth: '100px' }}>Add</Button>
            <p className="mt-2">{FIB}</p>
        </Form>
    )
};

export default NumberInput;