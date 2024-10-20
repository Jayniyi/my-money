import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './assets/components/navbar';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Home from './pages/home/home';
import { useAuthContext } from './hooks/useauthcontext';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <Router>
      {authIsReady && <Navbar />}
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
    </Router>
  );
}

export default App;