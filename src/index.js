import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);

// During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);
// ReactDOM.creatRoot(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
