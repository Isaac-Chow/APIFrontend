import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Navbar = () => {

    const { user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" > API Django</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-end">
                    {/* Hamburger Button START  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Hamburger Button END  */}

                    {/* Menu Items START  */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-2">
                                <Link to="/articles" className='btn btn-primary'>Articles</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/projects" className='btn btn-primary'>Projects</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/users" className='btn btn-primary'>Users</Link>  
                            </li>
                        </ul>
                    </div>
                    {/* Login/Logout Button */}
                    <div>
                        {
                            ( user.username === "anonymous" )
                            ?
                            <Link to="/login" className='btn btn-warning mx-2'>Logout</Link> 
                            :
                            <span>
                                <Link to="/login" className='btn btn-success mx-2'>Login</Link>
                                <Link to="/signup" className='btn btn-outline-success mx-2'>Signup</Link>
                            </span>
                        }
                    </div>
                    {/* Menu Items END  */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;