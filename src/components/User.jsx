import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    // Called when the component is first rendered
    useEffect(
        () => {
            handleGetUsers();
        },
        []
    );

    const handleGetUsers = () => {
        axios.get(`/users/${parseInt(id)}/`).then(
            value => {
                console.log(value.data);
                console.log(typeof value.data)
                setUser(value.data);
            }
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className='card'>
                            <h3 className='card-title'>{user.name}</h3>
                            <div className='card-body'>
                                { user.about }
                            </div>
                            <div className='card-footer d-flex justify-content-between'>
                                <p>{ user.email }</p>
                                <a href={ `mailto:${user.emal}` } className="btn btn-outline-success">Send Email</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;