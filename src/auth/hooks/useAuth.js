import { useReducer } from "react";

import Swal from "sweetalert2"
import { loginReducer } from "../pages/reducers/loginReducer";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) ||{
    isAuth: false,
    user: undefined,
}
const user = {
    username: 'admin',

}

export const useAuth =()=>{
    const [login, dispatch ] = useReducer(loginReducer, initialLogin );
    const navigate = useNavigate();
    const handlerLogin = ({username, password}) =>{
        if(!username || !password){
            Swal.fire('error de validacion', 'Username y password requeridos', 'error')
        }else{
        const isLogin = loginUser({username, password})
            if(isLogin){
        
            dispatch({
                type:'login',
                payload:user
            })
      
            Swal.fire('success login', 'Bienvenido '+user.username+ '!', 'success')
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
                
            }));
            navigate('/users')
        }else{
            Swal.fire('error login', 'Username y password erroneos', 'error')
        }
    }
    }
    const handlerLogout=()=>{
        Swal.fire({
            title: "Quieres cerrar sesión?",
            text: "La sesión será cerrada!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cerrar sesión!",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type:'logout',
                
                })
                sessionStorage.removeItem('login');
               
              Swal.fire({
                title: "Adios "+ user.username +"!",
                text: "Session cerrada.",
                icon: "success"
              });
            }
          });
      
    }
 
    return{
        login, handlerLogin, handlerLogout
    }
}