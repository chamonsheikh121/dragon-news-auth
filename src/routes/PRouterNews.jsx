import { useContext } from "react";
import { AuthContext } from "../layout/Providers/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";


const PRouterNews = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname)


    if (loading) {
        return <div className="w-full h-lvh  flex justify-center items-center">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (user) {

        return children
    }



    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PRouterNews;

PRouterNews.propTypes = {
    children: PropTypes.node
}