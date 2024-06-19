import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function GuestRoutes () {
	const isLogin = useSelector(state => state.auth.token !== '')

	const isAdmin = useSelector(
		(state) => state.auth.token !== "" && state.auth.user.role === "ADMIN"
	 );
	if (isLogin) {
		if(isAdmin) return <Navigate to="/admin" />
		
		else return <Navigate to="/logintest" />
	}

	return <Outlet />
}