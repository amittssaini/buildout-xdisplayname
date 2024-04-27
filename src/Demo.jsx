import React, { useState } from 'react'

const Demo = () => {
    const [name,setName]=useState({
        firstName:'',
        lastName:''
    })

    const handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setName({
            ...name,
            [key]: value
        });
    }
    

    const fetchFullName=()=>{
        const {firstName,lastName}=name;
        console.log(firstName,lastName);
        setFullName(`${firstName} ${lastName}`)
    }
    const [fullName,setFullName]=useState('');
  return (
    <div>
        <h1>Full Name Display</h1>
        <label htmlFor="first-name">First Name: </label>
        <input id='first-name' value={name.firstName} name='firstName' onChange={handleInput} />
        <br/>
        <label htmlFor='last-name'>Last Name: </label>
        <input id='last-name' value={name.lastName} name='lastName' onChange={handleInput} />
        <br/>
        <button onClick={fetchFullName}>Submit</button>
        <div>
            <h3>{fullName}</h3>
        </div>
    </div>
  )
}

export default Demo