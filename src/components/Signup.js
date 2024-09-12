import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../features/signupSlice'

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        dispatch(signup({
            name: name,
            email: email,
            password: password,
            isLoggedIn: true,
        }))
    }

    return (
        <div className='App'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Name' value={name} autoComplete="off" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' value={email} autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
                <input type="button" value="Signup" />
            </form>

        </div>
    )
}

export default Signup
