import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Main = ()=>{
  return(
    <App/>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
