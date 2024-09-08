import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/features/store.ts'
import router from './routes/index.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persistor}>
    <RouterProvider router={router}/>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
