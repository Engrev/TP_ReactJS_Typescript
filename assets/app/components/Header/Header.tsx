import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="content">
                <div className="head">
                    <Link to="/">TP ReactJS Typescript</Link>
                </div>
                <div className="body">
                    <nav className="nav flex-column p-3">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                      ? 'active nav-link'
                                      : 'nav-link'
                            }
                        >
                            <i className="fa-regular fa-house"></i>
                            <span>Feed</span>
                        </NavLink>
                        <NavLink
                            to="/routines"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                      ? 'active nav-link'
                                      : 'nav-link'
                            }
                        >
                            <i className="fa-regular fa-clipboard-list"></i>
                            <span>Routines</span>
                        </NavLink>
                        <NavLink
                            to="/exercises"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                      ? 'active nav-link'
                                      : 'nav-link'
                            }
                        >
                            <i className="fa-regular fa-dumbbell"></i>
                            <span>Exercises</span>
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                      ? 'active nav-link'
                                      : 'nav-link'
                            }
                        >
                            <i className="fa-regular fa-user"></i>
                            <span>Profile</span>
                        </NavLink>
                        <NavLink
                            to="/settings"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                      ? 'active nav-link'
                                      : 'nav-link'
                            }
                        >
                            <i className="fa-regular fa-gear"></i>
                            <span>Settings</span>
                        </NavLink>
                    </nav>
                    <Link to="/profile">Thomas Vergne</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
