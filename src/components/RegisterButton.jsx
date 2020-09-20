import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'


import Mailchimp from 'react-mailchimp-form';
import MailchimpSubscribe from "react-mailchimp-subscribe";

import '../css/RegisterButton.scss';
import '../css/FancyButton.css';
import '../css/FancyField.css';

const CustomForm = ({ status, message, onValidated }) => {
    let email, fname, lname;
    const submit = () =>
      email &&
      fname &&
      lname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
        LNAME: lname.value
      });
  
    return (
      <div
        style={{
          borderRadius: 2,
          padding: "10px",
          display: "inline-block",
          width: "100%",
          textAlign: "center"
        }}
      >
        <div className="field">
          <input ref={node => (fname = node)}
            type="text"
            placeholder="First Name"/>
          <div className="line"></div>
        </div>
        <div className="field">
          <input ref={node => (lname = node)}
            type="text"
            placeholder="Last Name"/>
          <div className="line"></div>
        </div>
        <div className="field">
          <input ref={node => (email = node)}
            type="email"
            placeholder="Your email"/>
          <div className="line"></div>
        </div>
        <button className="fancy-button" onClick={submit} style={{marginTop: "20px"}}>
          Subscribe!
        </button>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    );
  };

const url = "https://oxfordhack.us17.list-manage.com/subscribe/post?u=6d21f884b8201af11f1246c51&amp;id=1d61d1ba22";

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
        <div>
            <button className="button" onClick={handleShow}>
              Subscribe for updates!
            </button>
        </div>
        )
}
  
        <Modal show={show} onHide={handleClose} centered dialogClassName="border-radius-2" style={{background: "none"}}>
          <Modal.Body style={{background: "rgba(0.1, 0.1, 0.1, 0.8)"}}>
            {/*<Mailchimp
              action='https://oxfordhack.us17.list-manage.com/subscribe/post?u=6d21f884b8201af11f1246c51&amp;id=1d61d1ba22'
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
            />*/}

            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />


          </Modal.Body>
        </Modal>
      </>
    );
}

export default RegisterButton;