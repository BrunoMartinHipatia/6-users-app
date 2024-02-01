import { Navigate, Route, Routes } from "react-router-dom"
import {UsersPage} from "../pages/UsersPage"
import { useUsers } from "../hooks/useUsers"
import { NavBar } from "../components/layout/NavBar"
import { RegisterPage } from "../pages/RegisterPage"
export const UserRoutes =({login, handlerLogout} ) =>{
    const {
        handlerAddUser, handlerRemoveUser, visibleForm,
         handlerUserSelectedForm, users, userSelected,
          initialUserForm, handlerCloseForm, handlerOpenForm
    } = useUsers();

    return(
        <>
        <NavBar login={login} handlerLogout={handlerLogout}></NavBar>
        <Routes>
        <Route path="users" element={<UsersPage users={users} 
        userSelected={userSelected} initialUserForm={initialUserForm} 
        visibleForm={visibleForm} handlerAddUser={handlerAddUser} 
        handlerRemoveUser={handlerRemoveUser} handlerUserSelectedForm={handlerUserSelectedForm}
         handlerOpenForm={handlerOpenForm} handlerCloseForm={handlerCloseForm}/>}/>
        <Route path="users/register" element={<RegisterPage handlerAddUser={handlerAddUser}  initialUserForm={initialUserForm} />}/>
        <Route path="users/edit/:id" element={<RegisterPage users={users}handlerAddUser={handlerAddUser}  initialUserForm={initialUserForm} />}/>
        <Route path="/" element={<Navigate to ="/users"></Navigate>}>  </Route >
        </Routes>
        </>
    )
}