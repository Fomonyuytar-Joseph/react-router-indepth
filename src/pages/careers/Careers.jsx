import React from 'react'
import {useLoaderData,Link}  from 'react-router-dom'
const Careers = () => {
    const careers = useLoaderData();

    // console.log(careers);
  return (
    <div>
    {
        careers.map((career)=>(
            <Link to={career.id.toString( )} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>

        ))
    }
    </div>
  )
}

export default Careers


//loader function
export const careersLoader = async ()=>{
    const res = await fetch("http://localhost:4000/careers");
    if(!res.ok){
        throw Error('Could not fetch the careeers')
    }

    return res.json();

}