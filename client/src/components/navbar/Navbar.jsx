import { useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: ' inherit', textDecoration: 'none' }}>
          <span className="logo">NabeelBooking</span>
        </Link>
        {user ? (
          <>
            <div className="navItems">
              {user.username}
              <button className="navButton" onClick={logout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={()=>{navigate('/register')}}>
              Register
            </button>
            <button
              className="navButton"
              onClick={() => {
                user ? navigate('/') : navigate('/login');
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
