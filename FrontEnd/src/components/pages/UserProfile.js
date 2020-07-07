import React , {useContext} from 'react'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom';

export default function UserProfile() {

    
    const {userData} = useContext(UserContext);
    
    
    return (
        <div className="page">
        {userData.user ? (
          <h1>Welcome {userData.user.nombre}</h1>
        ) : (
          <>
            <h2>You are not logged in</h2>
            <Link to="/login">Log in</Link>
          </>
        )}
      </div>
    )
}
