import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
//import App from './components/App'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Routines from './pages/Routines/Routines'
import Exercises from './pages/Exercises/Exercises'
import Profile from './pages/Profile/Profile'
import Error from './components/Error/Error'
import Settings from './pages/Settings/Settings'
//import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
root.render(
    <React.StrictMode>
        <Router>
            <main>
                <Header />
                <div className="page">
                    <div className="container pt-4">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/routines" element={<Routines />} />
                            <Route path="/exercises" element={<Exercises />} />
                            <Route
                                path="/exercises/:exerciseId"
                                element={<Exercises />}
                            />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </div>
            </main>
        </Router>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
