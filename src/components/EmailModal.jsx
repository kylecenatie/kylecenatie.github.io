import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EmailModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} id={props.id}>
        {props.buttonName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>{props.description}</Form.Label>
              <Form.Control as="textarea" id="text_area_mod"  autoFocus rows={3} />
            </Form.Group>
          </Form>  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control
              id='email_area_mod'
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" id="send_but" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmailModal;