import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageEditor from './ImageEditor'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageEditor />
    {/* <App /> */}

  </StrictMode>,
);