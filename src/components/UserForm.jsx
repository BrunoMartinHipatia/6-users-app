import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected, handlerCloseForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);
  const { id, username, password, email } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value
    });
  };

  useEffect(() => {
    setUserForm({ ...userSelected, password: '' });
  }, [userSelected]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id === 0) || !email) {
      Swal.fire({
        title: "Campos sin rellenar",
        text: "Hay campos que no están rellenados",
        icon: "error"
      });
      return;
    }

    // Validación de correo electrónico
    if (!validateEmail(email)) {
      Swal.fire({
        title: "Error de validacion de email",
        text: "Por favor, introduce un correo electrónico válido.",
        icon: "error"
      });
      return;
    }

    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  const validateEmail = (email) => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email);
  };

  return (
    <form onSubmit={onSubmit}>
      <input className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={onInputChange}></input>
      {id > 0 || <input className="form-control my-3 w-75" placeholder="Password" type="password" name="password" value={password} onChange={onInputChange}></input>}

      <input className="form-control my-3 w-75" placeholder="Email" name="email" id="user-email" value={email} onChange={onInputChange}></input>
      <input type="hidden" name="id" value={id}></input>
      <button className="btn btn-primary" type="submit">
        {id > 0 ? 'Editar' : 'Crear'}
      </button>
      {!handlerCloseForm || <button className="btn btn-primary mx-2" type="button" onClick={handlerCloseForm}>Cerrar</button>}
    </form>
  );
};
