import React from 'react'
import {ToastContainer} from 'react-toastify'
import {Navigation} from './routes/index'
import 'react-toastify/dist/ReactToastify.css';

import {AuthProvider} from './context'
export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
      
   
  )
}