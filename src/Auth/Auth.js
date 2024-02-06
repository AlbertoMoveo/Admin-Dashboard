import { Navigate } from "react-router-dom";
import { ROUTES } from "../Routes/Routes";

const Auth = ({children}) => {
    if(sessionStorage.getItem('token')) {
        return children
    }
    return <Navigate to={ROUTES.LOGIN}></Navigate>;
}

export default Auth;