import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Routines from './pages/Routines/Routines';
import NewRoutine from './pages/Routines/NewRoutine';
import Exercises from './pages/Exercises/Exercises';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import { ErrorBoundary } from 'react-error-boundary';
import Alert from './components/Alert';
function App() {
    return (_jsx("div", { className: "page", children: _jsx("div", { className: "container pt-4", children: _jsx(ErrorBoundary, { FallbackComponent: PageError, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/routines", element: _jsx(Routines, {}) }), _jsx(Route, { path: "/routines/:routinesId", element: _jsx(Routines, {}) }), _jsx(Route, { path: "/routines/new", element: _jsx(NewRoutine, {}) }), _jsx(Route, { path: "/exercises", element: _jsx(Exercises, {}) }), _jsx(Route, { path: "/exercises/:exerciseId", element: _jsx(Exercises, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) })] }) }) }) }));
}
function PageError({ error }) {
    return _jsx(Alert, { type: "danger", children: error.toString() });
}
export default App;
