import Swal from "sweetalert2";
import { usersReducer } from "../reducer/usersReducer";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
const initialUsers = [
    {
        id:1, 
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

const initialUserForm = {
    id:0,
    username: '',
    password: '',
    email: ''
}
export const useUsers =()=>{
    const [users, dispatch]= useReducer(usersReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();
    const handlerAddUser=(user) =>{
        let type;
        if(user.id===0){

            type='addUser';
            Swal.fire({
                title: "Usuario creado!",
                text: "El usuario fue creado con exito!",
                icon: "success"
              });
             
        }else{
            type='updateUser'
            Swal.fire({
                title: "Usuario actualizado!",
                text: "El usuario fue actualizado con exito!",
                icon: "success"
              });
        }
        handlerCloseForm(); 
        navigate('/users')
     dispatch({
    
        type: type,
        payload: user
     })
    
    }
    const handlerRemoveUser = (id)=>{
        Swal.fire({
            title: "Estas seguro?",
            text: "El usuario sera eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borralo!",
            cancelButtonText: "No, no quiero borrarlo"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id
                    
                 })
              Swal.fire({
                title: "Borrado",
                text: "El usuario ha sido borrado.",
                icon: "success"
              });
            }
          });
     
         
    }

    const handlerUserSelectedForm = (user) =>{
        setUserSelected({...user});
        setVisibleForm(true);
    }
    const handlerOpenForm =()=>{
        setVisibleForm(true);
    }
    const handlerCloseForm =()=>{
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }
    return{
        users, userSelected, initialUserForm, visibleForm, handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, handlerOpenForm, handlerCloseForm
    }
}