import React from 'react'
import {useParams ,useLoaderData} from 'react-router-dom'
const CareerDetails = () => {
    const {id}= useParams()
    const career= useLoaderData()
console.log(id);
    return (
    <div className='career-details'>
        <h2>Careeer Details for {career.title} </h2>
        <p>starting salary : {career.salary}</p>
        <p>location: {career.location}</p>
        <div className='details'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, amet!
            </p>

        </div>
    </div>
  )
}

export default CareerDetails



export const careerDetailsLoader = async ({params})=>{

    const {id} = params;
    const res = await fetch("http://localhost:4000/careers/" + id);
    if(!res.ok){
        throw Error('Could not find that career')
    }
    return res.json();


}