import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Checkbox from './components/Checkbox';
import Label from './components/Label';

function App() {
  const [isChecked, setIsChecked] = useState(false);

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
      </Form>
    </Container>
  );
}

export default App;
