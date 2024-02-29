import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {

    const [users, setUsers] = useState([]);

    // Called when the component is first rendered
    useEffect(
        () => {
            handleGetUsers();
        },
        []
    )

    const handleGetUsers = () => {
        axios.get("/users/").then(
            value => {
                console.log(value.data);
                console.log(typeof value.data)
                setUsers(value.data);
            }
        )
    }

    return(
        <div>
            { 
            users.length === 0 
            ? 
                <div>
                    <p>Check Backend Connection then hit the button below</p>
                    <button className='btn btn-primary mb-3' onClick={handleGetUsers}>Show Users</button>
                </div>
            : 
                users.map(
                    (user, idx) => {
                        return (
                            <div key={idx} className='card mb-3'>

                                <h3 className='card-title'>{user.name}</h3>
                                <div className='card-body'>
                                    { user.about }
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <Link to={`/users/${user.id}`} className='btn btn-primary'>View User</Link>
                                </div>
                            </div>
                        )
                    } 
                )
            }
            
        </div>
    )
}

export default UserList;