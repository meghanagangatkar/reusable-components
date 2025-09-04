import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Checkbox from './components/Checkbox';
import Label from './components/Label';
import Textbox from './components/Textbox';
import Textarea from './components/Textarea';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [textAreaValue, setTextArea] = useState('');

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group controlId="label">
          <Label text="Sample Label" htmlFor="label" required />
          <Checkbox
            label="Sample Checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </Form.Group> 
        <div>-------------------------</div>
        <Label text="Sample Text Box" htmlFor="label" required />
         <Textbox
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Enter values"
          required
          id="sample-textbox"
        />
        <div>-------------------------</div>
         <Label text="Sample Text Area" htmlFor="label" required />
         <Textarea
          value={textAreaValue}
          rows={4}
          onChange={(e) => setTextArea(e.target.value)}
          placeholder="Enter values"
          required
          id="sample-textarea"
        />
      </Form>
    </Container>
  );
}

export default App;
