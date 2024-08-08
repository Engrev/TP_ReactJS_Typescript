import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
//import App from './components/App'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Routines from './pages/Routines/Routines';
import Exercises from './pages/Exercises/Exercises';
import Profile from './pages/Profile/Profile';
import Error from './components/Error/Error';
import Settings from './pages/Settings/Settings';
//import reportWebVitals from './reportWebVitals'
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(_jsx(React.StrictMode, { children: _jsx(Router, { children: _jsxs("main", { children: [_jsx(Header, {}), _jsx("div", { className: "page", children: _jsx("div", { className: "container pt-4", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/routines", element: _jsx(Routines, {}) }), _jsx(Route, { path: "/exercises", element: _jsx(Exercises, {}) }), _jsx(Route, { path: "/exercises/:exerciseId", element: _jsx(Exercises, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) }), _jsx(Route, { path: "*", element: _jsx(Error, {}) })] }) }) })] }) }) }));
