import { Container, Form } from 'react-bootstrap';
import Label from './components/Label';

function App() {
  return (
    <Container className="mt-4">
      <Form>
        <Form.Group controlId="username">
          <Label text="Username" htmlFor="username" required />
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
