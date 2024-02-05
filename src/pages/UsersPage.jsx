import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/usersList"
import { UserContext } from "../context/UserContext";
export const UsersPage = () => {

 
const {
    
          visibleForm,
          users, 
            handlerOpenForm
    
} = useContext(UserContext);
    return (
        <>
      
            {!visibleForm || <UserModalForm></UserModalForm>
            }
            <div className="container my-4">
                <h2>Users App</h2>
                {visibleForm || <button className="btn btn-primary my-2" onClick={handlerOpenForm} >Nuevo usuario</button>}

                <div className="row">

                    <div className="col">
                        {users.length === 0 ? <div className="alert alert-warning">No hay usuarios en el sistema</div> :
                            <UsersList></UsersList>}

                    </div>

                </div>

            </div>
        </>
    )

}