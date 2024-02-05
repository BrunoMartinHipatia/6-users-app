import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider =({children})=>{
    const {
        handlerAddUser, handlerRemoveUser, visibleForm,
         handlerUserSelectedForm, users, userSelected,
          initialUserForm, handlerCloseForm, handlerOpenForm
    } = useUsers();

    return(
        <UserContext.Provider value={
            {
                handlerAddUser, handlerRemoveUser, visibleForm,
                handlerUserSelectedForm, users, userSelected,
                 initialUserForm, handlerCloseForm, handlerOpenForm
            }
        }>
            {children}
        </UserContext.Provider>
    )
}