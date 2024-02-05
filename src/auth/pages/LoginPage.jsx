import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm ={
    username:'',
    password:'',

}
export const LoginPage = ()=>{
  const {handlerLogin} = useContext(AuthContext);
 const [loginForm, setLoginForm] = useState(initialLoginForm)
 const {username, password} = loginForm;
 const onInputChange = ({target}) =>{
    const {name, value} = target;
    setLoginForm({
        ...loginForm, 
        [name]: value,
    })
 }
 const onSubmit =(event) =>{
    event.preventDefault();
    if(!username || !password){
        Swal.fire('error de validacion', 'Username y password requeridos', 'error')
    }
         handlerLogin({username, password});
      
        setLoginForm(initialLoginForm);
   
   
 }
 return (
  <>
<div className="modal" style={{display: "block"}} tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Login page</h5>  
      </div>
      <form onSubmit={onSubmit}>
        <input className="form-control m-3 w-75" placeholder="Username" name="username" value={username} onChange={onInputChange}></input>
        <input className="form-control m-3 w-75" type="password" placeholder="Password" value={password} onChange={onInputChange} name="password"></input>
  
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary" >Login</button>

      </div>
      <div>
      <h5 className="modal-title mx-3">username de prueba: admin</h5>
      <h5 className="modal-title mx-3">password de prueba: 12345</h5>
      <hr></hr>
      <h2 className="modal-title mx-3">Puedes probar a fallar o no poner nada para ver que pasa</h2>
      </div>
      </form>
    </div>
  </div>
</div>


</>
    );
}