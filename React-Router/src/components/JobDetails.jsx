import React from 'react'
import { useLoaderData } from 'react-router-dom'


function JobDetails() {

  const jobDetails = useLoaderData();
  return (
    <div className='job-details'>
      <p><b>Job Title: </b>{jobDetails.title}</p>
      <p><b>Job Salary: </b>{jobDetails.salary}</p>
      <p><b>Job Location: </b>{jobDetails.location}</p>
      <p><b>Description: </b>Hello everyone</p>
      <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=> {
  const {id} = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if(!res.ok) {
    throw Error("Could not found the job details")
  }
  return res.json();
}
//find parameters from URL or xyz