import React from 'react';
import { Form } from 'react-bootstrap';

interface TextboxProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    className?: string;
    required?: boolean;
    type?: string;
}

const Textbox: React.FC<TextboxProps> = ({
    value = '',
    onChange,
    placeholder = '',
    disabled = false,
    id,
    className,
    required = false,
    type = 'text'
}) => {
    return (
            <Form.Control
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={className}
                required={required}
                id={id}
            />
    );
};

export default Textbox;