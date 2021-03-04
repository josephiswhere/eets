// this is what I wrote down from Sully explaining how to get started from scratch, let me know if I missed anything:
// Create a very simple shell component in React that renders something simple like a paragraph element that says 'hello world'.
// Create a simple server, nothing fancy. Get the confirmation that it's active on port 3000.
// Set up webpack so you can physically see the React app on the browser and then connect the server to the app with the proxy so they are talking to each other.
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from '../client/App';

// const HelloWorld = () => {
//   return (
//       <h1>
//           Hello Worlds
    
//       </h1>
//   );
// }


render( 
  <App />,
  document.getElementById('root'),
);

// ReactDOM.render(<HelloWorld />, document.getElementById("root"))