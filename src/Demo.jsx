import React, { useState } from 'react'

const Demo = () => {
    const [name,setName]=useState({
        firstName:'',
        lastName:''
    })
    const [fullName,setFullName]=useState('');


    const handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setName({
            ...name,
            [key]: value
        });
    }
    

    const fetchFullName=(e)=>{
        e.preventDefault();
        const {firstName,lastName}=name;
        console.log(firstName,lastName);
        if(firstName&&lastName){
        setFullName(`Full Name: ${firstName} ${lastName}`)
        }
    }
  
  return (
    <div>
        <form onSubmit={fetchFullName}>
        <h1>Full Name Display</h1>
        <label htmlFor="first-name">First Name: </label>
        <input id='first-name' value={name.firstName} required name='firstName' onChange={handleInput}/>
        <br/>
        <label htmlFor='last-name'>Last Name: </label>
        <input id='last-name' value={name.lastName} required name='lastName' onChange={handleInput}/>
        <br/>
        <button type='sumbit'>Submit</button>
        </form>
        <div>
            <p> {fullName}</p>
        </div>
    </div>
  )
}

export default Demo