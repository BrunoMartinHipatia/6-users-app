import { Navigate, Route, Routes } from "react-router-dom"
import {UsersPage} from "../pages/UsersPage"
import { useUsers } from "../hooks/useUsers"
import { NavBar } from "../components/layout/NavBar"
import { RegisterPage } from "../pages/RegisterPage"
import { UserProvider } from "../context/UserProvider"
export const UserRoutes =( ) =>{
  
    return(
        <>
        <UserProvider>
        <NavBar></NavBar>
        <Routes>
        <Route path="users" element={<UsersPage />}/>
        <Route path="users/register" element={<RegisterPage />}/>
        <Route path="users/edit/:id" element={<RegisterPage />}/>
        <Route path="/" element={<Navigate to ="/users"></Navigate>}>  </Route >
        </Routes>
        </UserProvider>
        </>
    )
}