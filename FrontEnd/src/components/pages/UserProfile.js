import React , {useContext} from 'react'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom';

export default function UserProfile() {

    
    const {userData} = useContext(UserContext);
    
    
    return (
        <div>
        {
          userData.user && userData.user.userType === 1 ?  (
          <h1>Welcome {userData.user.nombre} Proveedor</h1>
          
        ) : userData.user && userData.user.userType === 2 ? (
          <h1>Welcome {userData.user.nombre} Cliente</h1>
        ): (
          <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>
        )}
      </div>
    )
}
