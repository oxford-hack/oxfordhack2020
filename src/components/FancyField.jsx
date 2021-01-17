import React from 'react';

import '../css/FancyField.css';

const FancyField = (props) => (
    <div className="field">
      <input {...props}/>
      <div className="line"></div>
    </div>
);

export default FancyField;
