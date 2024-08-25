import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-yZ4qlf_miX-_zF0F73IN3O4YS4UMw4c",
  authDomain: "valhalla-coder.firebaseapp.com",
  projectId: "valhalla-coder",
  storageBucket: "valhalla-coder.appspot.com",
  messagingSenderId: "710596853570",
  appId: "1:710596853570:web:868ca65c2b8b3d0a71d2db"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
