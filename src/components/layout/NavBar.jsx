import { NavLink } from "react-router-dom";

export const NavBar =({login, handlerLogout})=>{
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">UsersApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav" >
      <li className="nav-item">
      <NavLink className="nav-link" to="/users">Usuarios</NavLink>
      
      </li>

    </ul>
    <ul className="navbar-nav" >
      <li className="nav-item">
      <NavLink className="nav-link" to="/users/register">Registrar usuario</NavLink>
      
      </li>

    </ul>
  </div>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
    <span className="nav-item nav-link txt-primary text-white">{login.user?.username}</span>
    <button className="btn btn-outline-success mx-3" onClick={handlerLogout}>Logout</button>
  </div>
</nav>
);
}