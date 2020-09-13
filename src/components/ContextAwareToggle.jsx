import React, {useContext} from 'react';
import {useAccordionToggle} from 'react-bootstrap';
import AccordionContext from 'react-bootstrap/AccordionContext';
import '../css/ContextAwareToggle.css'

const ContextAwareToggle = ({ children, eventKey}) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      style = {{outline: "none"}}
      className = {isCurrentEventKey ? "pressed" : "notPressed"}
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default ContextAwareToggle;