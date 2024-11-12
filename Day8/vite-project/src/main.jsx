import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DisplayMarks from './DisplayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App naam={'Devansh'} email={'devansh@gmail.com'} no={1001}/>
    
    <App naam={'Devansh'} email={'devansh@gmail.com'} no={1001}/>
    <DisplayMarks />

  </StrictMode>
);
