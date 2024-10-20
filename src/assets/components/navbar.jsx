import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useauthcontext"
import { useLogout } from '../../hooks/uselogout'

// styles
import styles from './navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <>
            <li className={styles.user}>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}