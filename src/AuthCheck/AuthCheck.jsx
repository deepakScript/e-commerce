import { Navigate, useLocation } from "react-router";

const AuthCheck = ({children}) => {
    const isAuthenticate = false;
    const location = useLocation();

    if (!isAuthenticate) {
        return <Navigate to="/login" state={
            { 
                from: location 
            }
        }  />;
    }
    return children;
}

export default AuthCheck
