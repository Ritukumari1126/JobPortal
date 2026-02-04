// // import React from "react"
// // import ReactDOM from "react-dom/client"
// // import App from "./App.jsx"
// // import "./index.css"


// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <App />
// //     <Toaster richColors position="top-right"/>
// //   </React.StrictMode>
// // )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.js";
// import { Toaster } from "sonner"

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//     <Toaster richColors position="top-right"/>
//   </Provider>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)