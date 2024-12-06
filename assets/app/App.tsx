import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Routines from './pages/Routines/Routines'
import NewRoutine from './pages/Routines/NewRoutine'
import Exercises from './pages/Exercises/Exercises'
import Profile from './pages/Profile/Profile'
import Settings from './pages/Settings/Settings'
import { ErrorBoundary } from 'react-error-boundary'
import Alert from './components/Alert'

function App() {
    return (
        <div className="page">
            <div className="container pt-4">
                <ErrorBoundary FallbackComponent={PageError}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/routines" element={<Routines />} />
                        <Route
                            path="/routines/:routinesId"
                            element={<Routines />}
                        />
                        <Route path="/routines/new" element={<NewRoutine />} />
                        <Route path="/exercises" element={<Exercises />} />
                        <Route
                            path="/exercises/:exerciseId"
                            element={<Exercises />}
                        />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </ErrorBoundary>
            </div>
        </div>
    )
}

function PageError({ error }: { error: Error }) {
    return <Alert type="danger">{error.toString()}</Alert>
}

export default App
