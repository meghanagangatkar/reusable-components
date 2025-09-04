import React from 'react';
import { Form } from 'react-bootstrap';

interface LabelProps {
    text: string;
    htmlFor?: string;
    required?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const Label: React.FC<LabelProps> = ({
    text,
    htmlFor,
    required = false,
    className,
    style,
}) => (
    <Form.Label htmlFor={htmlFor} className={className} style={style}>
        {text}
        {required && <span style={{ color: 'red', marginLeft: '4px' }}>*</span>}
    </Form.Label>
);

export default Label;
