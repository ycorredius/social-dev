import {React, useState } from 'react'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [state, setState] = useState({email: "", password: ""})
    const history = useHistory();
    const handleChange = (e) =>{
        const  {name,value } = e.target;
        setState(prevState => ({
         ...prevState,
         [name]: value
        }))
     }
     
     const submit = (e) => {
        e.preventDefault()
        if (true) { 
            history.push('/dashboard')
         } else{
            console.log(e)    
         }
    }
    
    return(
        <div>
              <form onSubmit={submit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login