import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.css'
import { MyProvider } from './context'


const Main = () => {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)