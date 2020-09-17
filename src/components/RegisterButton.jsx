import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'


import Mailchimp from 'react-mailchimp-form';

import '../css/RegisterButton.scss'

const RegisterButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });
  
    return (
      <>
        {isDesktop ? (
            <a className="first after fancy" href="#" onClick={handleShow} style={{flexShrink: 0, marginRight: "10px"}}><p className="element"> Subscribe for updates! </p></a>
        ) : (
        <button className="button"  onClick={handleShow}>
          Subscribe for updates!
        </button>)
}
  
        <Modal show={show} onHide={handleClose} centered dialogClassName="border-radius-2">
          <Modal.Body>
            <Mailchimp
              action={process.env.REACT_APP_MAILCHIMP_URL}
              fields={[
                  {
                      name: 'EMAIL',
                      placeholder: 'Email',
                      type: 'email',
                      required: true
                  }, {
                      name: 'FNAME',
                      placeholder: 'First Name',
                      type: 'text',
                      required: true
                  }, {
                      name: 'LNAME',
                      placeholder: 'Last Name',
                      type: 'text',
                      required: true
                    }
              ]}
              className="mailchimp"
            />
          </Modal.Body>
        </Modal>
      </>
    );
}

export default RegisterButton;