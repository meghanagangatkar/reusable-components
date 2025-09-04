import React from 'react';
import { Form } from 'react-bootstrap';

interface TextareaProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    className?: string;
    required?: boolean;
    rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
    value = '',
    onChange,
    placeholder = '',
    disabled = false,
    id,
    className,
    required = false,
    rows = 4
}) => {
    return (
        <Form.Control
            as="textarea"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={className}
            required={required}
            id={id}
            rows={rows}
        />
    );
};

export default Textarea;