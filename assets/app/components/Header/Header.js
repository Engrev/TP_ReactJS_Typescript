import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from 'react-router-dom';
function Header() {
    return (_jsx("header", { children: _jsxs("div", { className: "content", children: [_jsx("div", { className: "head", children: _jsx(Link, { to: "/", children: "HEVY" }) }), _jsxs("div", { className: "body", children: [_jsxs("nav", { className: "nav flex-column p-3", children: [_jsxs(NavLink, { to: "/", className: ({ isActive, isPending }) => isPending
                                        ? 'pending nav-link'
                                        : isActive
                                            ? 'active nav-link'
                                            : 'nav-link', children: [_jsx("i", { className: "fa-regular fa-house" }), _jsx("span", { children: "Feed" })] }), _jsxs(NavLink, { to: "/routines", className: ({ isActive, isPending }) => isPending
                                        ? 'pending nav-link'
                                        : isActive
                                            ? 'active nav-link'
                                            : 'nav-link', children: [_jsx("i", { className: "fa-regular fa-clipboard-list" }), _jsx("span", { children: "Routines" })] }), _jsxs(NavLink, { to: "/exercises", className: ({ isActive, isPending }) => isPending
                                        ? 'pending nav-link'
                                        : isActive
                                            ? 'active nav-link'
                                            : 'nav-link', children: [_jsx("i", { className: "fa-regular fa-dumbbell" }), _jsx("span", { children: "Exercises" })] }), _jsxs(NavLink, { to: "/profile", className: ({ isActive, isPending }) => isPending
                                        ? 'pending nav-link'
                                        : isActive
                                            ? 'active nav-link'
                                            : 'nav-link', children: [_jsx("i", { className: "fa-regular fa-user" }), _jsx("span", { children: "Profile" })] }), _jsxs(NavLink, { to: "/settings", className: ({ isActive, isPending }) => isPending
                                        ? 'pending nav-link'
                                        : isActive
                                            ? 'active nav-link'
                                            : 'nav-link', children: [_jsx("i", { className: "fa-regular fa-gear" }), _jsx("span", { children: "Settings" })] })] }), _jsx(Link, { to: "/profile", children: "Thomas Vergne" })] })] }) }));
}
export default Header;
