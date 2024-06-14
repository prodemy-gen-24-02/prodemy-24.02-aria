import { useState } from "react"

function Register() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        role:'USER'
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <>
        <div className="flex flex-col h-80 border-2 border-gray-300 justify-center">
            <h1>Signup Form</h1>
            <form className='flex flex-col align-middle justify-center max-w-sm space-y-6' onSubmit={e => handleSubmit(e)}>
                <input className='border-2 border-gray-300 px-2 mx-4' type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                <input className='border-2 border-gray-300 px-2 mx-4' type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <select className='border-2 border-gray-300 px-2 mx-4'
                name="role"
                onChange={e => handleChange(e)}>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>
        </>
    )
}

export default Register