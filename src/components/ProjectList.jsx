import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const ProjectList = () => {

    const [projects, setProjects] = useState([]);

    const handleGetProjects = () => {
        axios.get("/projects/").then(
            value => {
                console.log(value.data);
                console.log(typeof value.data)
                setProjects(value.data);
                value.data.map(
                    (project, idx) => {
                        console.log(project);
                        console.log(project.id);
                    }
                )
            }
        )
    }

    useEffect(
        () => {
            handleGetProjects();
        },
        []
    )

    return(
        <div>
            {
                projects.length === 0
                ?
                    <div>
                         <p>Check Backend Connection then hit the button below</p>
                        <button className='btn btn-primary mb-3' onClick={handleGetProjects}>Show Projects</button>
                    </div>
                :
                projects.map(
                    (project, idx) => {
                        return (
                            <div key={idx} className='card mb-3'>
                                <div className='card-header '>
                                    <span>
                                        <small className="text-muted">{ project.date }</small>
                                    </span>
                                </div>

                                <h3 className='card-title'>{project.name}</h3>
                                <div className='card-body'>
                                    { project.about }
                                </div>
                                <div className='card-footer d-flex justify-content-between'>
                                    <Link to={`${project.github}`} className="btn btn-info" >Github Link</Link>
                                    <Link to={`/projects/${parseInt(project.id)}`} className='btn btn-primary'>View Project</Link>
                                </div>
                            </div>
                        )
                    } 
                )
            }
        </div>
    )
}

export default ProjectList;