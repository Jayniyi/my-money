import  { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './assets/components/navbar';
import { useAuthContext } from './hooks/useauthcontext';

// Lazy load the components
const Login = lazy(() => import('./pages/login/login'));
const Signup = lazy(() => import('./pages/signup/signup'));
const Home = lazy(() => import('./pages/home/home'));

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <Router>
      {authIsReady && <Navbar />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Redirect to Home if user is signed in */}
          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />

          {/* Login Route */}
          <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />

          {/* Signup Route */}
          <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App