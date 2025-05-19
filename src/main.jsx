import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { easeIn, motion } from 'framer-motion';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: [0, 0.01 , 0.02, 1], delay: 0.5 }}>
      <App />
    </motion.div>
  </StrictMode>,
)
