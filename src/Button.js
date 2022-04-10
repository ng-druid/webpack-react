import React from 'react';

function doAlert() {
  alert('hello');
}

const Button = () => (
  <button onClick={doAlert}>MFE1 Button</button>
);

export default Button;