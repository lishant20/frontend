import React from "react";
import { useLoaderData } from "react-router-dom";

function JobDetails() {

  const jobDetails = useLoaderData();
  return (
    <div className='job-details'>
      <p><b>Job Title: </b>{jobDetails.title}</p>
      <p><b>Job Salary: </b>{jobDetails.salary}</p>
      <p><b>Job Location: </b>{jobDetails.location}</p>
      <p><b>Description: </b>Hello Welcome!</p>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async({params})=>{
  const {id} = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if(!res.ok) {
    throw Error("Couldnot found the job details")
  }
  return res.json();
}