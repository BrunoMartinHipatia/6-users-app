import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/usersList"
export const UsersPage = ({
    handlerAddUser, handlerRemoveUser, visibleForm,
     handlerUserSelectedForm, users, userSelected,
      initialUserForm, handlerCloseForm, handlerOpenForm
}) => {

 

    return (
        <>
      
            {!visibleForm || <UserModalForm userSelected={userSelected} initialUserForm={initialUserForm} handlerAddUser={handlerAddUser} handlerCloseForm={handlerCloseForm}></UserModalForm>
            }
            <div className="container my-4">
                <h2>Users App</h2>
                {visibleForm || <button className="btn btn-primary my-2" onClick={handlerOpenForm} >Nuevo usuario</button>}

                <div className="row">

                    <div className="col">
                        {users.length === 0 ? <div className="alert alert-warning">No hay usuarios en el sistema</div> :
                            <UsersList users={users} handlerRemoveUser={handlerRemoveUser} handlerUserSelectedForm={
                                handlerUserSelectedForm}></UsersList>}

                    </div>

                </div>

            </div>
        </>
    )

}