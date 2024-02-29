import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import { Link } from "react-router-dom";

const Project = () => {
    const { id } = useParams();

    const [project, setProject] = useState([]);

    // Called when the component is first rendered
    useEffect(
        () => {
            handleGetProjects();
            console.log(id);
            console.log(typeof id);
        },
        []
    );

    const handleGetProjects = () => {
        axios.get(`/projects/${parseInt(id)}/`).then(
            value => {
                console.log(value.data);
                console.log(typeof value.data)
                setProject(value.data);
                console.log(id);
            }
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className='card'>
                            <h3 className='card-title'>{project.name}</h3>
                            <div className="card-header">
                                <span>
                                    <small className="text-muted">{ project.date }</small>
                                </span>
                            </div>
                            <div className='card-body'>
                                <p>
                                    { project.about }
                                </p>
                            </div>
                            <div className='card-footer'>
                                <p>
                                    { project.concepts }
                                </p>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/projects`} className='btn btn-warning'>Back</Link>
                                    <Link to={`${project.github}`} className="btn btn-outline-info text-dark" >Github Link</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;