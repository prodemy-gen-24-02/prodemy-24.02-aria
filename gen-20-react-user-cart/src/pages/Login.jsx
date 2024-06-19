import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken, setUser } from '../store/authSlice.js'


export default function Login() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((state) => state.auth.user);
	const isLoggedIn = useSelector((state) => state.auth.token !== "");

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const setInputValue = event => setFormData({
		...formData,
		[event.target.name]: event.target.value
	})

	const handleLogin = event => {
		event.preventDefault()
		axios.post('http://localhost:3001/login', formData)
			.then(res => {
				const { accessToken, user } = res.data
				dispatch(setToken(accessToken))
				dispatch(setUser(user))
				navigate('/admintest')
			})
			.catch(err => {
				alert('Terjadi kesalahan')
				console.error(err)
				console.error(err.response)
			})
	}
	return (
		<div className="flex justify-center">
			<div className="flex flex-col justify-center border-2 border-gray-300 mx-auto my-6 p-10 space-y-4">

				<h1>Login</h1>

				<form onSubmit={handleLogin}>
					<div>
						Email: <br />
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={setInputValue} />
					</div>
					<br />
					<div>
						Password: <br />
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={setInputValue} />
					</div>
					<br />
					<button>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}
