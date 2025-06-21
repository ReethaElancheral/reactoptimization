import React from 'react';


const Greeting = ({ name }) => {
  console.log('Greeting component rendered');
  return <h2>Hello, {name}!</h2>;
};


export default React.memo(Greeting);
