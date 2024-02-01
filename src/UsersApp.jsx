
import { LoginPage } from "./auth/pages/LoginPage"
import { useAuth } from "./auth/hooks/useAuth"
import { Route, Routes,Navigate } from "react-router-dom"
import { UserRoutes } from "./routes/UserRoutes"




export const UsersApp = () => {

 const {login, handlerLogin, handlerLogout } = useAuth();
   
    
    return (
        <Routes>

            {login.isAuth?
             (
            <Route path='/*' element={<UserRoutes login={login} handlerLogout={handlerLogout}/>}/> 
            
           
            ) 
            : <>
            <Route path="/login" element={<LoginPage handlerLogin={handlerLogin}></LoginPage>}/>
                <Route path='/*' element={<Navigate to="login"/>}></Route>
            </> }
 
        {/* */}
        </Routes>
    )

}