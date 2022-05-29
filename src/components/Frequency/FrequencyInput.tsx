import React from "react";
import { Button, Form } from "react-bootstrap";
import { FrequencyProps } from "../../types";

const FrequencyInput: React.FC<FrequencyProps> = ({ onSubmit, disabled }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="frequencyInput">Please enter the amount of time in seconds between emitting numbers and their frequency</Form.Label>
                <Form.Control id="frequencyInput" placeholder="Frequency" />
            </Form.Group>
            <Button disabled={disabled} variant="primary" type="submit" style={{ maxWidth: '100px' }}>Set</Button>
        </Form>
    )
};

export default FrequencyInput;