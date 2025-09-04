import React from 'react';
import { Form } from 'react-bootstrap';

interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    id?: string;
    className?: string;
    required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    onChange,
    disabled = false,
    id,
    className,
    required = false,
}) => {
    return (
        <Form.Check
            type="checkbox"
            label={required ? `${label} *` : label}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            id={id}
            className={className}
        />
    );
};

export default Checkbox;