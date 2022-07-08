import {React, useState }from 'react'

const Signup = () => {
    const [state, setState] = useState({firstName:"", lastName: "", email: "", password: ""})

    const handleChange = (e) =>{
       const  {name,value } = e.target;
       setState(prevState => ({
        ...prevState,
        [name]: value
       }))
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name='firstName' onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name='lastName' onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup