import React  from 'react';
import { Link } from 'react-router-dom'
import AuthOptions from '../auth/AuthOptions'

export default function Navigation() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    
                    <Link className="navbar-brand" to="/">
                        Qoper
                    </Link>
                    
                    <AuthOptions/>
                  
                </div>
            </nav>
        )
}
