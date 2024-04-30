import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviderComponent';
import { Navigate, useLocation } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className="min-h-[calc(100vh-400px)] container mx-auto flex items-center justify-center">
            <ClockLoader
                color='#DD5746'
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={location?.pathname || '/'}></Navigate>

};

export default PrivateRoutes;