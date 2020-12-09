import React, {useEffect, useState} from 'react'
import '../css/experience.css'
import jobData from '../jobs.json'
import { Arrow } from './Arrow'
import {JobComponent} from './JobComponent'

export function Experience() {
    const [jobComponents, setJobComponents] = useState([])
    useEffect(() => {
        var jobs = []
        for (let i in jobData) {
            jobs.push(<JobComponent job={jobData[i]}/>)
        }
        setJobComponents(jobs)
    }, [])
    return (
        <React.Fragment>
            <div id="experience-header">
                <svg className="arrow">
                    <Arrow target="header-container" direction="up"/>
                </svg>
                <h1>My Journey</h1>
            </div>
            <div id="job-section">
                {jobComponents}
            </div>
            <svg className="arrow">
                <Arrow target="header-container" direction="down"/>
            </svg>
        </React.Fragment>
    )
}