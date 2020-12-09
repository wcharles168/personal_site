import React, {useEffect, useState} from 'react'
import '../css/jobComponent.css'

export function JobComponent(props) {
    const [job, setJob] = useState("")
    useEffect(() => {
        var jobInfo = props.job
        const jobElement = (
            <div className="job">
                <div className="job-img-container">
                    <img className="job-img" src={jobInfo.img} alt="Job"/>
                </div>
                <div className="job-description">
                    <h3>{jobInfo.start} - {jobInfo.end}</h3>
                    <p>{jobInfo.description}</p>
                </div>
            </div>
        )
        setJob(jobElement)
    }, [props.job])
    return (
        <div className="job-container">
            {job}
        </div>
    )
}